import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import {buildSvgLoader} from "./loaders/buildSvgLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = buildCssLoader(isDev);
    const svgLoader = buildSvgLoader();

    const assetLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        type: 'asset/resource',
    };

    const babelLoader = {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['react-refresh/babel'],
                ],
            },
        },
    };

    return [
        assetLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}

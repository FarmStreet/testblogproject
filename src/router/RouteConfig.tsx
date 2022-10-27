import { RouteProps } from 'react-router-dom';
import Main from "pages/Main/Main";
import Article from "pages/Article/Article";

export enum AppRoutes {
    MAIN = 'main',
    ARTICLE = 'article',
    TAG = 'tag',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ARTICLE]: '/article/:articleId',
    [AppRoutes.TAG]: '/tag/:tagId',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*',
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <Main />,
    },
    [AppRoutes.ARTICLE]: {
        path: RoutePath[AppRoutes.ARTICLE],
        element: <Article />,
    },
    [AppRoutes.TAG]: {
        path: RoutePath[AppRoutes.TAG],
        element: <Main />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath[AppRoutes.PROFILE],
        element: <div></div>,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <div></div>,
    },
};

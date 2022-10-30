import { RouteProps } from 'react-router-dom';
import NotFound from "pages/NotFound/NotFound";
import {MainAsync} from "pages/Main/Main.async";
import {ArticleAsync} from "pages/Article/Article.async";
import {ProfileAsync} from "pages/Profile/Profile.async";

export enum AppRoutes {
    MAIN = 'main',
    ARTICLE = 'article',
    TAG = 'tag',
    PROFILE = 'profile',
    SIGN_IN = 'signIn',
    SIGN_UP = 'signUp',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ARTICLE]: '/article/:articleId',
    [AppRoutes.TAG]: '/tag/:tagId',
    [AppRoutes.SIGN_IN]: '/sign_in',
    [AppRoutes.SIGN_UP]: '/sign_up',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*',
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainAsync />,
    },
    [AppRoutes.ARTICLE]: {
        path: RoutePath[AppRoutes.ARTICLE],
        element: <ArticleAsync />,
    },
    [AppRoutes.TAG]: {
        path: RoutePath[AppRoutes.TAG],
        element: <MainAsync />,
    },
    [AppRoutes.SIGN_IN]: {
        path: RoutePath[AppRoutes.SIGN_IN],
        element: <ProfileAsync />,
    },
    [AppRoutes.SIGN_UP]: {
        path: RoutePath[AppRoutes.SIGN_UP],
        element: <ProfileAsync stageProp="signUp" />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath[AppRoutes.PROFILE],
        element: <ProfileAsync/>,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFound/>,
    },
};

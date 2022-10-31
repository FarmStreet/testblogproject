import { Fragment } from "react";
import SignIn from "components/Login/SignIn/SignIn";
import BlockHeader from "components/Block/BlockHeader/BlockHeader";
import SignUp from "components/Login/SignUp/SignUp";
import {AppRoutes, RoutePath} from "router/RouteConfig";
import {Link, useLocation} from "react-router-dom";

interface LoginPageProps {
}

const LoginPage = ({}: LoginPageProps) => {

    const location = useLocation();

    return (location.pathname === RoutePath[AppRoutes.SIGN_UP]
            ? <Fragment>
                <SignUp />
                    <BlockHeader>
                        <span>Уже зарегистрированы?</span>
                        <span><Link to={RoutePath[AppRoutes.SIGN_IN]}>Войти</Link></span>
                </BlockHeader>
               </Fragment>
            :<Fragment>
                <SignIn />
                <BlockHeader>
                    <span>Еще нет аккаунта?</span>
                    <span><Link to={RoutePath[AppRoutes.SIGN_UP]}>Зарегистрироваться</Link></span>
                </BlockHeader>
            </Fragment>

    );
};

export default LoginPage;
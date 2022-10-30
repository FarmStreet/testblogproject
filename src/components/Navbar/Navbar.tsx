import cls from "./Navbar.module.scss";
import classNames from "classnames";
import {AppRoutes, RoutePath} from "router/RouteConfig";
import TabLink from "components/Shared/TabLink/TabLink";

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {

    return (
        <div className={classNames(cls.Navbar, className)}>
            <div className={classNames(cls.TabCollection)}>
                <TabLink className={cls.Logo} url={RoutePath[AppRoutes.MAIN]}>LOGO</TabLink>
            </div>
            <div className={classNames(cls.TabCollection)}>
                <TabLink url={RoutePath[AppRoutes.MAIN]}>Главная</TabLink>
                <TabLink url={RoutePath[AppRoutes.PROFILE]}>Профиль</TabLink>
            </div>
        </div>
    );
};

export default Navbar;
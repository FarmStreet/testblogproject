import cls from "./TabLink.module.scss";
import classNames from "classnames";
import {Link, useLocation} from "react-router-dom";
import {ReactNode} from "react";

interface TabLinkProps {
    className?: string;
    url: string;
    children: ReactNode;
}

const TabLink = ({url, children, className}: TabLinkProps) => {

    const location = useLocation();

    return (
        <Link to={url}><div className={
            classNames(
                cls.Tab,
                {[cls.Active]: location.pathname === url},
                className
            )}>{children}</div></Link>
    );
};

export default TabLink;
import cls from "./Navbar.module.scss";
import classNames from "classnames";

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, className)}>
            <div className={classNames(cls.TabCollection)}>
                <div className={classNames(cls.Tab)}>LOGO</div>
            </div>
            <div className={classNames(cls.TabCollection)}>
                <div className={classNames(cls.Tab)}>Главная</div>
                <div className={classNames(cls.Tab)}>Профиль</div>
            </div>
        </div>
    );
};

export default Navbar;
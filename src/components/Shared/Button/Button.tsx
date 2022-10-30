import cls from "./Button.module.scss";
import {ButtonHTMLAttributes, ReactNode} from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
}

const Button = (props: ButtonProps) => {

    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <button className={classNames(cls.Button, className)} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
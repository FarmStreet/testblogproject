import cls from "./Input.module.scss";
import classNames from "classnames";
import {InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Input = (props: InputProps) => {

    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <input className={classNames(cls.Input, className)} {...otherProps}/>
    );
};

export default Input;
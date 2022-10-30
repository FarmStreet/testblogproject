import cls from "./BlockItem.module.scss";
import classNames from "classnames";
import {ReactNode} from "react";

interface BlockItemProps {
    className?: string;
    children: ReactNode;
}

const BlockItem = ({className = '', children}: BlockItemProps) => {
    return (
        <div className={classNames(cls.BlockItem, className)}>
            {children}
        </div>
    );
};

export default BlockItem;
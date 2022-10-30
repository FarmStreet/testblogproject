import cls from "./BlockHeader.module.scss";
import classNames from "classnames";
import {ReactNode} from "react";
import BlockItem from "components/Block/BlockItem/BlockItem";

interface BlockHeaderProps {
    className?: string;
    children: ReactNode;
}

const BlockHeader = ({className, children}: BlockHeaderProps) => {
    return (
        <BlockItem className={classNames(cls.BlockHeader, className)}>
            {children}
        </BlockItem>
    );
};

export default BlockHeader;
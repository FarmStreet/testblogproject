import cls from "./BlockLoading.module.scss";
import classNames from "classnames";
import BlockItem from "components/Block/BlockItem/BlockItem";
import Loader from "components/Shared/Loader/Loader";
import {Fragment} from "react";
import {getRepeatedArray} from "actions/array";

interface BlockLoadingProps {
    className?: string;
    count?: number;
}

const BlockLoading = ({className, count = 5}: BlockLoadingProps) => {

    return (
        <Fragment>
            {getRepeatedArray([''], count).map((value, index) => (
                <BlockItem key={index} className={classNames(cls.BlockLoading, className)}>
                    <Loader />
                </BlockItem>
            ))}
        </Fragment>

    );
};

export default BlockLoading;
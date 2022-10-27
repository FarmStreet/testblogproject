import cls from "./BlockArticle.module.scss";
import classNames from "classnames";
import BlockItem from "components/BlockItem/BlockItem";
import {ReactNode} from "react";

interface BlockArticleProps {
    className?: string;
    title: string;
    tags: string[];
    children: ReactNode;
    url: string;
}

const BlockArticle = (props: BlockArticleProps) => {

    const {
        className,
        title,
        tags,
        children,
        url
    } = props;

    return (
        <BlockItem className={classNames(cls.BlockArticle, className)}>
            <div className={cls.Title}>{title}</div>
            <div className={cls.Tags}>{
                tags.map((tag, key, array) =>
                    <a key={key}>{tag}{array.length - 1 !== key ? ', ' : ''}</a>)}
            </div>
            <div className={cls.Desc}>{children}</div>
            <button className={cls.ReadButton}>Читать...</button>
        </BlockItem>
    );
};

export default BlockArticle;
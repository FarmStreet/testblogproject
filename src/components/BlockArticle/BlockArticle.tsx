import cls from "./BlockArticle.module.scss";
import classNames from "classnames";
import BlockItem from "components/BlockItem/BlockItem";
import {ReactNode} from "react";
import {Link} from "react-router-dom";
import ArticleBody from "components/ArticleBody/ArticleBody";

interface BlockArticleProps {
    className?: string;
    title: string;
    tag: string;
    children: ReactNode;
    id: number;
}

const BlockArticle = (props: BlockArticleProps) => {

    const {
        className,
        title,
        tag,
        children,
        id
    } = props;

    return (
        <BlockItem className={classNames(cls.BlockArticle, className)}>
            <ArticleBody title={title} tag={tag}>{children}</ArticleBody>
            <Link to={`/article/${id}`}><button className={cls.ReadButton}>Читать...</button></Link>
        </BlockItem>
    );
};

export default BlockArticle;
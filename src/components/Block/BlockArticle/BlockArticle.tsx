import cls from "./BlockArticle.module.scss";
import classNames from "classnames";
import BlockItem from "components/Block/BlockItem/BlockItem";
import {ReactNode} from "react";
import {Link} from "react-router-dom";
import ArticleBody from "components/Article/ArticleBody/ArticleBody";
import Button from "components/Shared/Button/Button";
import {useAppSelector} from "hooks/redux";

interface BlockArticleProps {
    className?: string;
    title: string;
    tag: string;
    children: ReactNode;
    id: number;
}

const BlockArticle = (props: BlockArticleProps) => {

    const {user} = useAppSelector(state => state.userReducer);

    const {
        className,
        title,
        tag,
        children,
        id
    } = props;

    return (
        <BlockItem className={classNames(cls.BlockArticle, className)}>
            <ArticleBody titleLink={user ? `/article/${id}` : ''} title={title} tag={tag}>{children}</ArticleBody>
            <Link to={user ? `/article/${id}` : '/profile'}>
                <Button className={cls.ReadButton}>
                    {user ? "Читать..." : "Авторизоваться для прочтения..."}
                </Button>
            </Link>
        </BlockItem>
    );
};

export default BlockArticle;
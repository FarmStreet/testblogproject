import cls from "./ArticleSinglePage.module.scss";
import classNames from "classnames";
import BlockItem from "components/Block/BlockItem/BlockItem";
import ArticleBody from "components/Article/ArticleBody/ArticleBody";
import {Link, useParams} from "react-router-dom";
import BlockHeader from "components/Block/BlockHeader/BlockHeader";
import {articleAPI} from "store/services/ArticleService";
import BlockLoading from "components/Block/BlockLoading/BlockLoading";

interface ArticleSinglePageProps {
    className?: string;
}

const ArticleSinglePage = ({className}: ArticleSinglePageProps) => {

    const { articleId } = useParams();
    const { data: article, error, isLoading } = articleAPI.useFetchQuery(Number(articleId))

    if (isLoading) return (
        <BlockLoading count={1} />
    )

    if (article === undefined || error) return (
        <BlockHeader>
            <span>Статья не найдена</span>
            <span><Link to={'/'}>На главную</Link></span>
        </BlockHeader>
    )

    return (
        <div className={classNames(cls.ArticleSinglePage, {}, [className])}>
            <BlockItem>
                <ArticleBody title={article.title} tag={article.tag}>{article.text}</ArticleBody>
            </BlockItem>
        </div>
    );
};

export default ArticleSinglePage;
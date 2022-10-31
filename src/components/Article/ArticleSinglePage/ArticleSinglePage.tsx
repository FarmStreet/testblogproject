import cls from "./ArticleSinglePage.module.scss";
import classNames from "classnames";
import {useParams} from "react-router-dom";
import {articleAPI} from "store/services/ArticleService";
import ArticleItem from "components/Article/ArticleItem/ArticleItem";

interface ArticleSinglePageProps {
    className?: string;
}

const ArticleSinglePage = ({className}: ArticleSinglePageProps) => {

    const { articleId } = useParams();
    const { data: article, error, isLoading } = articleAPI.useFetchQuery(Number(articleId))

    return (
        <div className={classNames(cls.ArticleSinglePage, {}, [className])}>
            <ArticleItem data={article} error={error} isLoading={isLoading}/>
        </div>
    );
};

export default ArticleSinglePage

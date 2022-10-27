import cls from "./Article.module.scss";
import classNames from "classnames";
import BlockItem from "components/BlockItem/BlockItem";
import {useAppSelector} from "hooks/redux";
import {useParams} from "react-router-dom";
import {filterById} from "actions/articleFilter";
import ArticleBody from "components/ArticleBody/ArticleBody";

interface ArticleProps {
    className?: string;
}

const Article = ({className}: ArticleProps) => {

    const { articleId } = useParams();
    const { articleList } = useAppSelector(state => state.articleReducer);
    const article = filterById(articleList, Number(articleId));

    if (article === undefined) return (
        <BlockItem>
            <div className={classNames(cls.NotFound)}>Статья не найдена</div>
        </BlockItem>
    )

    return (
        <div className={classNames(cls.Article, className)}>
            <BlockItem>
                <ArticleBody title={article.title} tag={article.tag}>{article.text}</ArticleBody>
            </BlockItem>
        </div>
    );
};

export default Article;
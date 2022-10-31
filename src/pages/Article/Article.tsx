import cls from "./Article.module.scss";
import classNames from "classnames";
import ArticleSinglePage from "components/Article/ArticleSinglePage/ArticleSinglePage";
import BlockHeader from "components/Block/BlockHeader/BlockHeader";
import withConditionalAuth from "components/HOC/withConditionalAuth";

interface ArticleProps {
    className?: string;
}

const Article = ({className}: ArticleProps) => {

    return (
        <div className={classNames(cls.Article, className)}>
            <ArticleSinglePage />
        </div>
    );
};

export default withConditionalAuth({
    isNotAuth: <BlockHeader>Необходимо авторизоваться</BlockHeader>
})(Article);
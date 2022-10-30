import cls from "./Article.module.scss";
import classNames from "classnames";
import ArticleSinglePage from "components/Article/ArticleSinglePage/ArticleSinglePage";
import BlockHeader from "components/Block/BlockHeader/BlockHeader";
import {useAppSelector} from "hooks/redux";

interface ArticleProps {
    className?: string;
}

const Article = ({className}: ArticleProps) => {

    const {user} = useAppSelector(state => state.userReducer);

    return (
        <div className={classNames(cls.Article, className)}>
            {user
                ? <ArticleSinglePage />
                : <BlockHeader>Необходимо авторизоваться</BlockHeader>
            }
        </div>
    );
};

export default Article;
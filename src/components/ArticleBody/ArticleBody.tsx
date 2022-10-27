import cls from "./ArticleBody.module.scss";
import {Fragment, ReactNode} from "react";
import {Link} from "react-router-dom";

interface ArticleBodyProps {
    title: string;
    tag: string;
    children: ReactNode;
}

const ArticleBody = ({title, tag, children}: ArticleBodyProps) => {
    return (
        <Fragment>
            <div className={cls.Title}>{title}</div>
            <Link to={`/tag/${tag}`} className={cls.Tags}>Рубрика: {tag}</Link>
            <div className={cls.Text}>
                {children}
            </div>
        </Fragment>
    );
};

export default ArticleBody;
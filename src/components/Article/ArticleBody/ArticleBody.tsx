import cls from "./ArticleBody.module.scss";
import {Fragment, ReactNode} from "react";
import {Link} from "react-router-dom";

interface ArticleBodyProps {
    title: string;
    tag: string;
    titleLink?: string;
    children: ReactNode;
}

const ArticleBody = ({title, tag, children, titleLink = ''}: ArticleBodyProps) => {

    return (
        <Fragment>
            <Link to={titleLink}>
                <div className={cls.Title}>{title}</div>
            </Link>
            <Link to={`/tag/${tag}`} className={cls.Tags}><div>Рубрика: {tag}</div></Link>
            <div className={cls.Text}>
                {children}
            </div>
        </Fragment>
    );
};

export default ArticleBody;
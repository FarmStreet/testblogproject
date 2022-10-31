import BlockItem from "components/Block/BlockItem/BlockItem";
import ArticleBody from "components/Article/ArticleBody/ArticleBody";
import withConditionalData from "components/HOC/withConditionalData";
import BlockLoading from "components/Block/BlockLoading/BlockLoading";
import BlockHeader from "components/Block/BlockHeader/BlockHeader";
import {Link} from "react-router-dom";
import {IArticle} from "models/IActicle";

interface ArticleItemProps {
    className?: string;
    data: IArticle;
}

const ArticleItem = ({className, data}: ArticleItemProps) => {
    return (
        <div className={className}>
            <BlockItem>
                <ArticleBody title={data.title} tag={data.tag}>{data.text}</ArticleBody>
            </BlockItem>
        </div>
    );
};

export default withConditionalData({
    loadingElement: <BlockLoading count={1} />,
    dataEmptyFeedback: <BlockHeader>
        <span>Статья не найдена</span>
        <span><Link to={'/'}>На главную</Link></span>
    </BlockHeader>,
    errorFeedback: <BlockHeader>
        <span>Статья не найдена</span>
        <span><Link to={'/'}>На главную</Link></span>
    </BlockHeader>,
})(ArticleItem);
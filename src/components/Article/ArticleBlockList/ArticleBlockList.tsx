import cls from "./ArticleBlockList.module.scss";
import classNames from "classnames";
import BlockArticle from "components/Block/BlockArticle/BlockArticle";
import React from "react";
import {IArticle} from "models/IActicle";
import {sliceText} from "actions/text";
import withConditionalData from "components/HOC/withConditionalData";
import BlockLoading from "components/Block/BlockLoading/BlockLoading";
import BlockHeader from "components/Block/BlockHeader/BlockHeader";

interface ArticleBlockListProps {
    className?: string;
    data: IArticle[];
}

const ArticleBlockList = ({className, data}: ArticleBlockListProps) => {
    return (
        <div className={classNames(cls.ArticleBlock, className)}>
            {data.map(({title,tag,id,text}, index) =>
                <BlockArticle key={index} title={title} tag={tag} id={id}>
                    {sliceText(text)}
            </BlockArticle>)}
        </div>
    );
};

export default withConditionalData({
    loadingElement: <BlockLoading count={5} />,
    dataEmptyFeedback: <BlockHeader>Статьи не найдены</BlockHeader>,
    errorFeedback: <BlockHeader>Произошла ошибка при загрузке статей</BlockHeader>
})(ArticleBlockList);
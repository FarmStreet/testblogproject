import cls from "./ArticleListWrapper.module.scss";
import classNames from "classnames";
import React from "react";
import ArticleBlockList from "components/Article/ArticleBlockList/ArticleBlockList";
import getArticleDataWithPagination from "actions/getArticleDataWithPagination";

interface ArticleListWrapperProps {
    className?: string;
    searchValue: string;
    setSearchValue: (value: string) => void;
}

const ArticleListWrapper = ({className, searchValue, setSearchValue}: ArticleListWrapperProps) => {

    const {data: articleList, error, isLoading} = getArticleDataWithPagination({
        searchValue: searchValue,
        setSearchValue: setSearchValue
    });

    return (
        <div className={classNames(cls.ArticleListWrapper, className)}>
            <ArticleBlockList data={articleList} error={error} isLoading={isLoading}/>
        </div>
    );
};

export default ArticleListWrapper;
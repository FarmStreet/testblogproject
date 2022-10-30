import cls from "./ArticleListWrapper.module.scss";
import classNames from "classnames";
import React, {Fragment, useEffect, useState} from "react";
import {articleAPI} from "store/services/ArticleService";
import BlockLoading from "components/Block/BlockLoading/BlockLoading";
import BlockHeader from "components/Block/BlockHeader/BlockHeader";
import {useParams} from "react-router-dom";
import BlockArticle from "components/Block/BlockArticle/BlockArticle";

interface ArticleListWrapperProps {
    className?: string;
    searchValue: string;
    setSearchValue: (value: string) => void;
}

const ArticleListWrapper = ({className, searchValue, setSearchValue}: ArticleListWrapperProps) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [pageIsChanging, setPageIsChanging] = useState(false);
    const { tagId } = useParams();
    const currentResult = articleAPI.useFetchAllQuery({_page: 1, _limit: 5 * currentPage, q: searchValue.trim(), tag: tagId})

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        })
        setCurrentPage(1);
        setSearchValue('');
    }, [tagId])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    })

    const scrollHandler = (e: any) => {

        const scrollHeight = e.target.documentElement.scrollHeight;
        const scrollTop = e.target.documentElement.scrollTop;
        const innerHeight = window.innerHeight;

        if (scrollHeight -
            (scrollTop + innerHeight) < 100) {
            if (!pageIsChanging) {
                setCurrentPage(page => page + 1);
                setPageIsChanging(true);
            }
        }
    }

    useEffect(() => {
        setPageIsChanging(false);
    }, [currentResult?.data?.length])


    let BlockList: JSX.Element;

    if (currentResult.isLoading) {
        BlockList = <Fragment>
            <BlockLoading />
        </Fragment>
    } else if (currentResult.error) {
        BlockList = <BlockHeader>Произошла ошибка при загрузке статей</BlockHeader>
    } else if (!currentResult.data) {
        BlockList = <BlockHeader>Статьи не найдены</BlockHeader>
    } else {
        BlockList = <Fragment>
            {currentResult.data.map(({ id, title, tag, text }, index) => (
                <BlockArticle key={index} title={title} tag={tag} id={id}>
                    {text.slice(0, 100).split(' ').slice(0, 20).slice(0, -1).join(' ') + '...'}
                </BlockArticle>
            ))}
        </Fragment>
    }

    return (
        <div className={classNames(cls.ArticleListWrapper, className)}>
            {BlockList}
        </div>
    );
};

export default ArticleListWrapper;
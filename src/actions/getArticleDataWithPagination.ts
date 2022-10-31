import {useEffect, useState} from "react";
import usePagination from "components/Hooks/usePagination";
import {articleAPI} from "store/services/ArticleService";
import {useParams} from "react-router-dom";

interface getArticleDataWithPaginationProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
    pageSize?: number;
}

const getArticleDataWithPagination = (props: getArticleDataWithPaginationProps) => {

    const {
        searchValue,
        setSearchValue,
        pageSize = 10
    } = props;

    const { tagId } = useParams();
    const [pageIsReadyToPaginate, setPageIsReadyToPaginate] = useState(false);
    const [pageIsNeedToClear, setPageIsNeedToClear] = useState(false);
    const currentPage = usePagination(
        pageIsReadyToPaginate,
        pageIsNeedToClear,
        setPageIsNeedToClear);
    const articleData =
        articleAPI.useFetchAllQuery({
            _page: 1,
            _limit: pageSize * currentPage,
            q: searchValue.trim(),
            tag: tagId
        })

    useEffect(() => {
        setPageIsReadyToPaginate(true);
    }, [articleData?.data?.length])
    useEffect(() => {
        setPageIsReadyToPaginate(false);
    }, [currentPage])
    useEffect(() => {
        setPageIsNeedToClear(true);
        setSearchValue('');
    }, [tagId])

    return articleData;
}

export default getArticleDataWithPagination;
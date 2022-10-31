import { useState, useEffect } from 'react';

const usePagination = (
    pageIsReadyToPaginate: boolean,
    pageIsNeedToClear: boolean,
    setPageIsNeedToClear: (value: boolean) => void
):number => {

    const [page, setPage] = useState(1);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    })

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        })
        setPage(1);
        setPageIsNeedToClear(false);
    },[pageIsNeedToClear])


    const scrollHandler = (e: any) => {

        const scrollHeight = e.target.documentElement.scrollHeight;
        const scrollTop = e.target.documentElement.scrollTop;
        const innerHeight = window.innerHeight;

        if (scrollHeight -
            (scrollTop + innerHeight) < 100) {
            if (pageIsReadyToPaginate) setPage(page => page + 1);
        }
    }

    return page;
}

export default usePagination;
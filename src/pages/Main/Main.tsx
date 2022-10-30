import cls from "./Main.module.scss";
import classNames from "classnames";
import BlockItem from "components/Block/BlockItem/BlockItem";
import {useParams} from "react-router-dom";
import SearchInput from "components/Shared/SearchInput/SearchInput";
import React, {useState} from "react";
import ArticleListWrapper from "components/Article/ArticleListWrapper/ArticleListWrapper";

interface MainProps {
    className?: string;
}

const Main = ({className}: MainProps) => {

    const [searchValue, setSearchValue] = useState<string>('');
    const search = (value: string) => setSearchValue(value);
    const { tagId } = useParams();

    return (
        <div className={classNames(cls.Main, className)}>
            <BlockItem className={cls.Filter}>
                <div>{tagId ? `Статьи по теме: ${tagId}` :  "Все статьи"}</div>
                <SearchInput onClick={search} className={cls.Search} />
            </BlockItem>
            <ArticleListWrapper searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
    );
};

export default Main;
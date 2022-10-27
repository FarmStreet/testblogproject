import cls from "./Main.module.scss";
import classNames from "classnames";
import BlockItem from "components/BlockItem/BlockItem";
import BlockArticle from "components/BlockArticle/BlockArticle";
import {useParams} from "react-router-dom";
import {useAppSelector} from "hooks/redux";
import {filterByTag, searchByText} from "actions/articleFilter";
import SearchInput from "components/SearchInput/SearchInput";
import {useEffect, useState} from "react";
import {IArticle} from "models/IActicle";

interface MainProps {
    className?: string;
}

const Main = ({className}: MainProps) => {

    const { tagId } = useParams();
    const { articleList } = useAppSelector(state => state.articleReducer);
    const [filteredArticleList, setFilteredArticleList] = useState<IArticle[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');

    useEffect(() => {
        setFilteredArticleList(filterByTag(articleList, tagId));
        setSearchValue('');
    }, [tagId])

    const search = (value: string) =>
        setFilteredArticleList(filterByTag(searchByText(articleList, value), tagId));

    return (
        <div className={classNames(cls.Main, className)}>
            <BlockItem className={cls.Filter}>
                <div>{tagId ? `Статьи по теме: ${tagId}` :  "Все статьи"}</div>
                <SearchInput value={searchValue} setValue={setSearchValue} onClick={search} className={cls.Search} />
            </BlockItem>
            {filteredArticleList.map(({ title, tag, id, text }, index) => (
                <BlockArticle key={index} title={title} tag={tag} id={id}>
                    {text.split(' ').slice(0, 20).join(' ') + '...'}
                </BlockArticle>
            ))}
        </div>
    );
};

export default Main;
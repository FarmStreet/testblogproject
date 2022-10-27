import {IArticle} from "models/IActicle";

export const filterByTag = (articleList: IArticle[], filterTag: string): IArticle[] =>
    articleList.filter(({tag}) => (tag === filterTag) || !filterTag);

export const filterById = (articleList: IArticle[], filterId: number): IArticle =>
    articleList.filter(({id}) => (id === filterId))[0];

export const searchByText = (articleList: IArticle[], searchValue: string): IArticle[] =>
    articleList.filter(({text, title}) =>
        (title.toLowerCase().indexOf(searchValue.trim().toLowerCase()) !== -1)
        || (text.toLowerCase().indexOf(searchValue.trim().toLowerCase()) !== -1));

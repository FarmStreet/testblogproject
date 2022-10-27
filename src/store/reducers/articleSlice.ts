import {createSlice} from "@reduxjs/toolkit";
import {IArticle} from "models/IActicle";
import {articleList} from "data/articles";

interface ArticleState {
    articleList: IArticle[],
}

const initialState: ArticleState = {
    articleList: articleList,
}

export const articleSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    }
})

export const {  } = articleSlice.actions;

export default articleSlice.reducer;

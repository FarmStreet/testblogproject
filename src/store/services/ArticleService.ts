import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IArticle} from "models/IActicle";
import {IArticleGetQueryParams} from "models/IArticleGetQueryParams";
import {API_URL} from "app/variables/api";

export const articleAPI = createApi({
    reducerPath: 'articleAPI',
    baseQuery: fetchBaseQuery(
        {baseUrl: API_URL}),
    tagTypes: ['ArticleItem'],
    endpoints: (build) => ({
        fetchAll: build.query<IArticle[], IArticleGetQueryParams>({
            query: (getParams: IArticleGetQueryParams) => ({
                url: `/articles`,
                method: 'GET',
                params: getParams,
                providesTags: ['ArticleItem']
            })
        }),
        fetch: build.query<IArticle, number>({
            query: (id: number) => ({
                url: `/articles/${id}`,
                method: 'GET',
                providesTags: ['ArticleItem']
            })
        }),
        create: build.mutation<IArticle, IArticle>({
            query: (post: IArticle) => ({
                url: `/articles`,
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['ArticleItem']
        })
    })
})
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IArticle} from "models/IActicle";
import {IGetQueryParams} from "models/IGetQueryParams";

export const articleAPI = createApi({
    reducerPath: 'articleAPI',
    baseQuery: fetchBaseQuery(
        {baseUrl: 'http://localhost:3000'}),
    tagTypes: ['Article'],
    endpoints: (build) => ({
        fetchAll: build.query<IArticle[], IGetQueryParams>({
            query: (getParams: IGetQueryParams) => ({
                url: `/articles`,
                method: 'GET',
                params: getParams,
                providesTags: ['Article']
            })
        }),
        fetch: build.query<IArticle, number>({
            query: (id: number) => ({
                url: `/articles/${id}`,
                method: 'GET',
                providesTags: ['Article']
            })
        }),
        create: build.mutation<IArticle, IArticle>({
            query: (post: IArticle) => ({
                url: `/articles`,
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Article']
        })
    })
})
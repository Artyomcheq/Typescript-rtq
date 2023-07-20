import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IAlbum } from '../models/models'


export const albumAPI = createApi({
    reducerPath: 'albumsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IAlbum[], number>({
            query: (limit: number = 5) => ({
                url: '/albums',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});
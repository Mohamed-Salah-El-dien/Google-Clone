import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const searchApiHeaders = {
  'X-User-Agent': 'desktop',
  'X-Proxy-Location': 'EU',
  'X-RapidAPI-Key': 'c46ff3ae35msh2d8ea35e9dc14b8p1bee04jsnf980dfc18795',
  'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
};
const createRequest = (url) => ({ url, headers: searchApiHeaders });

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://google-search3.p.rapidapi.com/api/v1',
  }),
  endpoints: (builder) => ({
    getResults: builder.query({
      query: (searchTerm) => createRequest(`/search/q=${searchTerm}`),
    }),

    getImages: builder.query({
      query: (searchTerm) => createRequest(`/image/q=${searchTerm}`),
    }),

    getVideos: builder.query({
      query: (searchTerm) => createRequest(`video/q=${searchTerm}`),
    }),

    getNews: builder.query({
      query: (searchTerm) => createRequest(`news/q=${searchTerm}`),
    }),
  }),
});

export const {
  useLazyGetResultsQuery,
  useLazyGetImagesQuery,
  useLazyGetNewsQuery,
  useLazyGetVideosQuery,
} = searchApi;

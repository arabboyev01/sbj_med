import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiBaseURL } from "@/shared/config";
import { NewsListType } from "@/shared/inderface";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${ApiBaseURL}/blog/post/`,
  }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsListType, void>({
      query: () => ({
        url: "list/",
        params: { page: 1, page_size: 5 },
      }),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;

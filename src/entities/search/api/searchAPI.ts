import { baseApi, methodTypes, tagTypes } from '@shared/api';
import { Article } from "@shared/lib"


export const searchApi = baseApi.injectEndpoints({
  endpoints: build => ({
    searchArticles: build.mutation<Article[], string>({
      query: (search: string) => ({
        url: "/search",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ search }),
        method: methodTypes.POST
      }),
      invalidatesTags: [tagTypes.SEARCH_TAG],
      transformResponse: (rawResult: { data: Article[] }) => rawResult.data
    }),
  })
})

export const {
  useSearchArticlesMutation
} = searchApi
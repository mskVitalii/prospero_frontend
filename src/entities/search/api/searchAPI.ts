import { baseApi, methodTypes, tagTypes } from '@shared/api';
import { Article } from "@shared/lib"
import { SearchState } from '../model/type';


export const searchApi = baseApi.injectEndpoints({
  endpoints: build => ({
    searchArticles: build.mutation<Article[], SearchState>({
      query: body => ({
        url: "/grandFilter",
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
        method: methodTypes.POST
      }),
      invalidatesTags: [tagTypes.SEARCH_TAG],
      transformResponse: (rawResult: { data: Article[] }, meta) => {
        const traceID = meta?.response?.headers.get("Prospero-Trace-Id")
        console.log(`${meta?.request.url} traceID=${traceID}`)
        return rawResult.data
      }
    }),
  })
})

export const {
  useSearchArticlesMutation
} = searchApi
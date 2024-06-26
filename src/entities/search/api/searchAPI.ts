import { baseApi, methodTypes, tagTypes } from '@shared/api';
import { SearchState } from '../model/type';
import { Article } from '@entities/article/model/type';


export const searchApi = baseApi.injectEndpoints({
  endpoints: build => ({
    searchArticles: build.mutation<{ data: Article[], total: number }, SearchState>({
      query: body => ({
        url: "/grandFilter",
        headers: {
          'Content-Type': 'application/json',
        },
        body,
        method: methodTypes.POST
      }),
      invalidatesTags: [tagTypes.SEARCH_TAG],
      transformResponse: (rawResult: { data: Article[], total: number }, meta) => {
        const traceID = meta?.response?.headers.get("Prospero-Trace-Id")
        console.log(`${meta?.request.url} traceID=${traceID}`)
        const data = rawResult.data
          ?.map(article => ({
            ...article,
            // DEMO изменяю дату
            // datePublished: new Date(new Date(article.datePublished).valueOf() + (-20 + Math.random() * 20) * 1000 * 60 * 60 * 24),
            datePublished: new Date(article.datePublished),
            address: {
              ...article.address, coords: [
                // Mock координаты статьи в пределах Москвы
                Number((55.75 - 0.15 + Math.random() * 0.25).toFixed(4)),
                Number((37.57 - 0.25 + Math.random() * 0.5).toFixed(4))] as [number, number]
            },
            publisher: {
              ...article.publisher, address: {
                ...article.publisher.address,
                coords: [
                  Number((article.publisher.address.coords[0] - 0.1 + Math.random() * 0.2).toFixed(4)),
                  Number((article.publisher.address.coords[1] - 0.1 + Math.random() * 0.2).toFixed(4))] as [number, number]
              }
            }
          }))
          .sort((a, b) => Number(a.datePublished) - Number(b.datePublished))
          .map(article => ({ ...article, datePublished: article.datePublished.toJSON() }))
          ?? []
        // return rawResult.data
        return { ...rawResult, data }
      }
    }),
  })
})

export const {
  useSearchArticlesMutation
} = searchApi
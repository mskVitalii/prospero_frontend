import { baseApi, methodTypes } from "@shared/api"
import { Publisher, SearchPublishers } from "./type"

const dropFiltersApi = baseApi.injectEndpoints({
  endpoints: build => ({
    searchPublishers: build.mutation<Publisher[], SearchPublishers>({
      query: ({ name }) => ({
        url: `/searchPublisherWithHints/${name}`,
        headers: {
          'Content-Type': 'application/json',
        },
        method: methodTypes.GET
      }),
      transformResponse: (rawResult: { data: Publisher[] }) => rawResult.data
    }),
  })
})

export const {
  useSearchPublishersMutation
} = dropFiltersApi
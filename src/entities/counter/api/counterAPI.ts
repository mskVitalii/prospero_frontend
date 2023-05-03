import { baseApi, methodTypes, tagTypes } from "@shared/api"


export const counterApi = baseApi.injectEndpoints({
  endpoints: build => ({
    fetchCount: build.mutation<number, number>({
      query: (amount: number) => ({
        url: "/counter",
        method: methodTypes.POST,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      }),
      invalidatesTags: () => [{ type: tagTypes.COUNTER_TAG }],
      transformResponse: (rawResponse: { data: number }) => rawResponse.data
    })
  })
})

export const { useFetchCountMutation } = counterApi
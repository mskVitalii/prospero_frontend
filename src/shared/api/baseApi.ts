import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { config } from '@shared/lib'
import { tagTypes } from './tags'

export const baseApi = createApi({
  reducerPath: 'api',
  tagTypes: [tagTypes.COUNTER_TAG, tagTypes.SEARCH_TAG],
  baseQuery: fetchBaseQuery({
    baseUrl: config.API_ENDPOINT,
  }),
  endpoints: _ => ({})
})
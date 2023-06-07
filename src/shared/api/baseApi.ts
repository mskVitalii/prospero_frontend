import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { tagTypes } from './tags'

export const baseApi = createApi({
  reducerPath: 'api',
  tagTypes: [tagTypes.SEARCH_TAG],
  baseQuery: fetchBaseQuery({
    baseUrl: "/api"
  }),
  endpoints: _ => ({})
})
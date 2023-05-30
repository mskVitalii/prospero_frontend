import { combineReducers } from '@reduxjs/toolkit'
import { search } from '@entities/search'
import { baseApi } from '@shared/api'

// Регистрируем редюсеры
export const rootReducer = combineReducers({
  [search.searchSlice.name]: search.searchSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
})

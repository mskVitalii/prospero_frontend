import { combineReducers } from '@reduxjs/toolkit'
import { counter } from '@entities/counter'
import { search } from '@entities/search'
import { baseApi } from '@shared/api'

// Регистрируем редюсеры
export const rootReducer = combineReducers({
  [counter.counterSlice.name]: counter.counterSlice.reducer,
  [search.searchSlice.name]: search.searchSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
})

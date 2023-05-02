import { combineReducers } from '@reduxjs/toolkit'
import counterSlice from '@entities/counter/model/counterSlice'
import searchSlice from '@entities/search/model/searchSlice'

// Регистрируем редюсеры
export const rootReducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
  [searchSlice.name]: searchSlice.reducer
})

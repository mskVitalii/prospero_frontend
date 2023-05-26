import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { SearchState, SearchString } from "./type"


const defaultSearchString: SearchString = {
  stringId: Date.now().toString(),
  search: "",
  isNegative: false,
  isExact: false
}

const initialState: SearchState = {
  filterStrings: [defaultSearchString],
  filterCountry: [],
  filterPeople: [],
  filterPublishers: [],
  filterTime: {
    start: new Date(new Date().getDate() - 7).toJSON(),
    end: new Date(Date.now()).toJSON()
  }
}

//* Общий slice для поисковых сущностей
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    //* 1. поисковые строки с операторами !, && и ""
    createSearchString: (state) => {
      state.filterStrings.push({ ...defaultSearchString, stringId: Date.now().toString() })
    },
    updateSearchString: (state, { payload }: PayloadAction<SearchString>) => {
      const id = state.filterStrings.findIndex(x => x.stringId === payload.stringId)
      if (id === -1) return
      state.filterStrings[id] = payload
    },
    deleteSearchString: (state, { payload }: PayloadAction<SearchString>) => {
      state.filterStrings = state.filterStrings
        .filter(({ stringId }) => stringId !== payload.stringId)
    },
    toggleNegativeSearchString: (state, { payload }: PayloadAction<SearchString>) => {
      const id = state.filterStrings.findIndex(x => x.stringId === payload.stringId)
      if (id === -1) return
      state.filterStrings[id].isNegative =
        !state.filterStrings[id].isNegative
    },
    toggleExactSearchString: (state, { payload }: PayloadAction<SearchString>) => {
      const id = state.filterStrings.findIndex(x => x.stringId === payload.stringId)
      if (id === -1) return
      state.filterStrings[id].isExact =
        !state.filterStrings[id].isExact
    },
    //TODO 2. поиск по выпадающим менюшкам
    //TODO 3. поиск по карте
    //TODO 4. поиск по диапазону времени
  }
})

export const {
  createSearchString,
  updateSearchString,
  deleteSearchString,
  toggleNegativeSearchString,
  toggleExactSearchString } = searchSlice.actions
export default searchSlice
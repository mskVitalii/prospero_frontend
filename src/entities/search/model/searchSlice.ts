import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { SeachTime, SearchCategory, SearchCountry, SearchPeople, SearchPublishers, SearchState, SearchString } from "./type"


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
  filterCategories: [],
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
    //* 2. Выпадающее меню категорий
    changeCategoryFilter: (state, { payload }: PayloadAction<SearchCategory[]>) => {
      state.filterCategories = payload
    },
    //* 3. Выпадающее меню людей
    changePeopleFilter: (state, { payload }: PayloadAction<SearchPeople[]>) => {
      state.filterPeople = payload
    },
    //* 4. Выпадающее меню публицистов
    changePublishersFilter: (state, { payload }: PayloadAction<SearchPublishers[]>) => {
      state.filterPublishers = payload
    },
    //* 5. Выпадающее меню карты
    addCountryFilter: (state, { payload }: PayloadAction<SearchCountry>) => {
      state.filterCountry.push(payload)
    },
    removeCountryFilter: (state, { payload }: PayloadAction<SearchCountry>) => {
      state.filterCountry = state.filterCountry
        .filter(x => x.country !== payload.country)
    },
    changeCountryFilter: (state, { payload }: PayloadAction<SearchCountry[]>) => {
      state.filterCountry = payload
    },
    //* 6. поиск по диапазону времени
    changeTimeFilter: (state, { payload }: PayloadAction<SeachTime>) => {
      state.filterTime = payload
    },
  }
})

export const {
  createSearchString,
  updateSearchString,
  deleteSearchString,
  toggleNegativeSearchString,
  toggleExactSearchString,
  changeTimeFilter,
  addCountryFilter,
  removeCountryFilter,
  changeCountryFilter,
  changePublishersFilter,
  changePeopleFilter,
  changeCategoryFilter
} = searchSlice.actions
export default searchSlice
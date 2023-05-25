/** Поисковая строка */
export type SearchString = {
  stringId: number
  /** Поисковая строка */
  search: string
  /** Оператор инверсии: новости БЕЗ этого search */
  isNegative: boolean
  /** Оператор полнотекстового поиска: новости ТОЧНО с search */
  isExact: boolean
}

/** Фильтр по людям */
export type SearchPeople = {
  /** имя */
  name: string
}

/** Фильтр по издания */
export type SearchPublishers = {
  /** название издания */
  name: string
}

/** Фильтр по местоположению */
export type SearchCountry = {
  /** название страны */
  country: string
}

export type SeachTime = {
  /** Начало временного диапазона */
  start: string
  /** Окончание временного диапазона */
  end: string
}


/** Все поисковые фильтры */
export type SearchState = {
  /** Массив поисковых строк, оператор объединения && */
  filterStrings: SearchString[]
  filterPeople: SearchPeople[]
  filterPublishers: SearchPublishers[]
  filterCountry: SearchCountry[]
  filterTime: SeachTime
}
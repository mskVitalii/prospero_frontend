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

/** Все поисковые */
export type SearchState = {
  /** Массив поисковых строк, оператор объединения && */
  filterStrings: SearchString[]
}
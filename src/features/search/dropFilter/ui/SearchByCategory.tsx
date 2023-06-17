import React, { useEffect } from 'react'
import { MultiSelect, Highlight } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { GoGame } from 'tabler-icons-react';
import classes from "./SearchByCategory.module.css"
import { search as store } from '@entities/search';
import { useAppDispatch, useAppSelector } from '@shared/lib';
import { useSearchCategoriesMutation } from '../api/dropFiltersAPI';


export const SearchByCategory = () => {
  const [search, setSearch] = useDebouncedState("", 250);
  const [trigger, { data: dataFetched }] = useSearchCategoriesMutation()

  useEffect(() => {
    trigger(search)
    data.length > 0 && console.table(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  //#region Redux
  const dispatch = useAppDispatch()
  const categoriesStore = useAppSelector(({ search }) => search.filterCategories).map(x => x.name)

  function selectCategories(value: string[]) {
    const categories = value.map(cat => ({ name: cat }))
    dispatch(store.changeCategoryFilter(categories))
  }
  //#endregion  
  const data = [...(dataFetched ?? []).map(x => x.name), ...categoriesStore]


  return <MultiSelect
    icon={<GoGame size="1rem" />}
    className={classes.filter}
    itemComponent={SelectItemRef}
    data={data.map(name => ({ value: name, label: name, search }))}
    label="Категории"
    placeholder="Политика"
    searchable clearable
    onSearchChange={setSearch}
    nothingFound="Нет такой категории"
    value={categoriesStore}
    onChange={selectCategories}
    transitionProps={{ duration: 150, transition: 'pop-top-left', timingFunction: 'ease' }}
    filter={(value, selected, item) =>
      !selected
      && item.value?.toLowerCase().includes(value.toLowerCase().trim())
    }
  />
}


interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  search: string
  label: string
}

const SelectItemRef = React.forwardRef<HTMLDivElement, ItemProps>(
  function SelectItem({ label, search, ...others }: ItemProps, ref) {
    return <Highlight highlight={[search]} ref={ref} {...others}>
      {label}
    </Highlight>
  }
);
import React, { useEffect, useState } from 'react'
import { MultiSelect, Highlight } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { GoGame } from 'tabler-icons-react';
import classes from "./SearchByCategory.module.scss"
import { search as store } from '@entities/search';
import { useAppDispatch, useAppSelector } from '@shared/lib';


export const SearchByCategory = () => {
  const [search, setSearch] = useDebouncedState("", 250);
  const [data, setData] = useState(['politics', 'economics', 'tech', 'medicine', 'law', 'games'])

  useEffect(() => {
    if (search.length === 0) return
    setData(prev => Array.from(new Set([...prev, search])))
  }, [search])

  //#region Redux
  const dispatch = useAppDispatch()
  const categoriesStore = useAppSelector(({ search }) => search.filterCategories).map(x => x.name)

  function selectCategories(value: string[]) {
    const categories = value.map(cat => ({ name: cat }))
    dispatch(store.changeCategoryFilter(categories))
  }
  //#endregion  


  return <MultiSelect
    icon={<GoGame size="1rem" />}
    className={classes.filter}
    itemComponent={SelectItemRef}
    data={data.map(x => ({ value: x, label: x, search }))}
    label="Категории"
    placeholder="politics..."
    searchable clearable
    onSearchChange={setSearch}
    nothingFound="No such category"
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
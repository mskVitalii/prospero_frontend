import React, { useEffect } from 'react'
import { MultiSelect, Highlight } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { Users } from 'tabler-icons-react';
import { search as store } from '@entities/search';
import { useAppDispatch, useAppSelector } from '@shared/lib';
import { useSearchPeopleMutation } from '../api/dropFiltersAPI';
import classes from "./SearchByPeople.module.css"

export const SearchByPeople = () => {
  const [search, setSearch] = useDebouncedState("", 250);
  const [trigger, { data: dataFetched }] = useSearchPeopleMutation()

  useEffect(() => {
    trigger(search)
    data.length > 0 && console.table(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  //#region Redux
  const dispatch = useAppDispatch()
  const peopleStore = useAppSelector(({ search }) => search.filterPeople).map(x => x.fullName)

  function selectPeople(value: string[]) {
    const people = value.map(id => ({ fullName: id }))
    dispatch(store.changePeopleFilter(people))
  }
  //#endregion
  const data = [...(dataFetched ?? []).map(x => x.fullName), ...peopleStore]

  return <MultiSelect
    icon={<Users size="1rem" />}
    dropdownPosition="bottom"
    className={classes.filter}
    itemComponent={SelectItemRef}
    data={data.map(x => ({ value: x, label: x, search }))}
    label="Люди"
    placeholder="Joe Biden"
    searchable clearable
    onSearchChange={setSearch}
    nothingFound="Человек не найден"
    value={peopleStore}
    onChange={selectPeople}
    transitionProps={{ duration: 150, transition: 'pop-top-left', timingFunction: 'ease' }}
    filter={(value, selected, item) =>
      !selected &&
      (item.value?.toLowerCase().includes(value.toLowerCase().trim()))
    } />
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
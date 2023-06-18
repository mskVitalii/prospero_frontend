import React, { useEffect } from 'react'
import { useSearchPublishersMutation } from '../api/dropFiltersAPI';
import { MultiSelect, Highlight } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { News } from 'tabler-icons-react';
import { useAppDispatch, useAppSelector } from '@shared/lib';
import { search as store } from '@entities/search';
import classes from "./SearchByPublisher.module.css"

export const SearchByPublisher = () => {
  const [search, setSearch] = useDebouncedState("", 250);
  const [trigger, { data: dataFetched }] = useSearchPublishersMutation()

  useEffect(() => {
    trigger({ name: search })
    data.length > 0 && console.table(data)
  }, [search])

  //#region Redux
  const dispatch = useAppDispatch()
  const publishersStore = useAppSelector(({ search }) => search.filterPublishers).map(x => x.name)

  function selectPublisher(value: string[]) {
    const publishers = value.map(id => ({ name: id }))
    dispatch(store.changePublishersFilter(publishers))
  }
  //#endregion

  const data = [...(dataFetched ?? []).map(x => x.name), ...publishersStore]

  return <MultiSelect
    dropdownPosition="bottom"
    icon={<News size="1rem" />}
    className={classes.filter}
    itemComponent={SelectItemRef}
    data={data.map(name => ({ value: name, label: name, search })) ?? []}
    label="Издание"
    placeholder="The New York Times"
    searchable clearable
    onSearchChange={setSearch}
    nothingFound="Издание не найдено"
    value={publishersStore}
    onChange={selectPublisher}
    transitionProps={{ duration: 150, transition: 'pop-top-left', timingFunction: 'ease' }}
    filter={(_, selected) => !selected}
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
import React, { useEffect } from 'react'
import { useSearchPublishersMutation } from '../api/dropFiltersAPI';
import { MultiSelect, Highlight } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { News } from 'tabler-icons-react';
import classes from "./SearchByPublisher.module.scss"

export const SearchByPublisher = () => {
  const [trigger, { data }] = useSearchPublishersMutation()
  const [search, setSearch] = useDebouncedState("", 250);
  data && console.table(data)

  useEffect(() => {
    if (search.length === 0) return
    trigger({ name: search })
  }, [search])


  return <MultiSelect
    icon={<News size="1rem" />}
    className={classes.filter}
    itemComponent={SelectItemRef}
    data={data?.map(x => ({ value: x.name, label: x.name, search })) ?? []}
    label="Publisher"
    placeholder="The New York Times"
    searchable clearable
    onSearchChange={setSearch}
    nothingFound="..."
    filter={(value, selected, item) => !selected}
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
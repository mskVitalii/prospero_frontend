import React, { useEffect, useState } from 'react'
import { MultiSelect, Highlight } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { Users } from 'tabler-icons-react';
import classes from "./SearchByPeople.module.scss"

export const SearchByPeople = () => {
  const [search, setSearch] = useDebouncedState("", 250);
  const [data, setData] = useState(['Joe Biden', 'Donald Tramp', 'Barack Obama', 'George Bush', 'Bill Klinton'])

  useEffect(() => {
    if (search.length === 0) return
    console.log("рисую: " + search + "_FETCHED");
    setData(prev => Array.from(new Set([...prev, search + "_FETCHED"])))
  }, [search])


  return <MultiSelect
    icon={<Users size="1rem" />}
    className={classes.filter}
    itemComponent={SelectItemRef}
    data={data.map(x => ({ value: x, label: x, search }))}
    label="People"
    placeholder="Joe Biden..."
    searchable clearable
    onSearchChange={setSearch}
    nothingFound="No such person"
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
import React, { forwardRef, useEffect, useState } from 'react'
import { MultiSelect, Highlight } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { Category } from 'tabler-icons-react';
import classes from "./SearchByCategory.module.scss"

export const SearchByCategory = () => {
  const [search, setSearch] = useDebouncedState("", 250);
  const [data, setData] = useState(['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js'])

  useEffect(() => {
    if (search.length === 0) return
    console.log("рисую: " + search + "_FETCHED");
    setData(prev => Array.from(new Set([...prev, search + "_FETCHED"])))
  }, [search])


  return <MultiSelect
    icon={<Category size="1rem" />}
    className={classes.filter}
    itemComponent={SelectItemRef}
    data={data.map(x => ({ value: x, label: x, search }))}
    label="Categories"
    placeholder="Pick all that you like"
    searchable
    onSearchChange={setSearch}
    nothingFound="Nothing found"
    filter={(value, selected, item) =>
      !selected &&
      (item.value?.toLowerCase().includes(value.toLowerCase().trim()))
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
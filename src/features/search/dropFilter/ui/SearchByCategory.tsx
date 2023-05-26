import React, { useEffect, useState } from 'react'
import { MultiSelect, Highlight } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { GoGame } from 'tabler-icons-react';
import classes from "./SearchByCategory.module.scss"

export const SearchByCategory = () => {
  const [search, setSearch] = useDebouncedState("", 250);
  const [data, setData] = useState(['politics', 'economics', 'tech', 'medicine', 'law', 'games'])

  useEffect(() => {
    if (search.length === 0) return
    setData(prev => Array.from(new Set([...prev, search])))
  }, [search])


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
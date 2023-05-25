import React, { useEffect } from 'react'
import { useSearchPublishersMutation } from '../api/dropFiltersAPI';
import { MultiSelect, Highlight } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';
import { News } from 'tabler-icons-react';
import classes from "./SearchByPublisher.module.scss"

export const SearchByPublisher = () => {
  const [trigger, { data }] = useSearchPublishersMutation()
  const [search, setSearch] = useDebouncedState("", 250);
  // const [data, setData] = useState(['The New York Times', 'The Hindustan Times', 'France 24', 'The Guardian', 'NHK'])
  data && console.table(data)

  useEffect(() => {
    if (search.length === 0) return
    console.log("FETCHED " + search);
    trigger({ name: search })
    // setData(prev => Array.from(new Set([...prev, search + "_FETCHED"])))
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
    filter={(value, selected, item) =>
      !selected
      // &&(item.value?.toLowerCase().includes(value.toLowerCase().trim()))
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
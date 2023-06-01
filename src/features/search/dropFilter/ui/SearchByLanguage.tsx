import React, { useState } from 'react'
import { Highlight, MultiSelect } from '@mantine/core'
import { useSearchLanguagesQuery } from '../api/dropFiltersAPI';
import { langByKey, langKey, useAppDispatch, useAppSelector } from '@shared/lib';
import { MessageLanguage } from 'tabler-icons-react';
import { search as store } from '@entities/search';
import classes from "./SearchByLanguage.module.scss"


export const SearchByLanguage = () => {
  const [search, setSearch] = useState("");
  const { data: dataFetched } = useSearchLanguagesQuery()

  //#region Redux
  const dispatch = useAppDispatch()
  const languagesStore = useAppSelector(({ search }) => search.filterLanguages).map(x => x.name)

  function selectLanguages(value: string[]) {
    const languages = value.map(lang => ({ name: langKey(lang) }))
    dispatch(store.changeLanguagesFilter(languages))
  }
  //#endregion  
  const data = (dataFetched ?? []).map(x => x.name)


  return <MultiSelect
    icon={<MessageLanguage size="1rem" />}
    className={classes.filter}
    itemComponent={SelectItemRef}
    data={data.map(name => ({ value: langByKey(name), label: langByKey(name), search }))}
    label="Языки"
    placeholder="Русский"
    searchable clearable
    onSearchChange={setSearch}
    nothingFound="Нет такой категории"
    value={languagesStore.map(langByKey)}
    onChange={selectLanguages}
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
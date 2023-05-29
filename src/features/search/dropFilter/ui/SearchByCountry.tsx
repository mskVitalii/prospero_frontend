import React from 'react'
import { flags } from '../model/flags';
import { countriesData } from '../model/countriesData';
import { useAppDispatch, useAppSelector } from '@shared/lib';
import {
  MultiSelect,
  Box, CloseButton, rem, Flex,
  SelectItemProps, MultiSelectValueProps,
} from '@mantine/core';
import { search } from '@entities/search';
import { Noto_Color_Emoji } from 'next/font/google';
import classes from "./SearchByCountry.module.scss"
import "react-svg-map/lib/index.css";


export const SearchByCountry = () => {
  const dispatch = useAppDispatch()
  const countrySearch = useAppSelector(({ search }) => search.filterCountry).map(x => x.country)

  function selectCountry(value: string[]) {
    const countries = value.map(id => ({ country: id }))
    dispatch(search.changeCountryFilter(countries))
  }

  return <MultiSelect
    data={countriesData}
    limit={20}
    className={classes.filter}
    value={countrySearch}
    searchable clearable
    valueComponent={Value}
    itemComponent={Item}
    placeholder="Россия"
    label="Страна"
    onChange={selectCountry}
    maxDropdownHeight={160}
    transitionProps={{ duration: 150, transition: 'pop-top-left', timingFunction: 'ease' }}
  />
}

const notoColorEmoji = Noto_Color_Emoji({ subsets: ['emoji'], weight: '400' })

function Value({
  value,
  label,
  onRemove,
  classNames,
  ...others
}: MultiSelectValueProps & { value: string }) {
  const flag = flags[value.toLocaleUpperCase()];
  return <div {...others}>
    <Box sx={(theme) => ({
      display: 'flex',
      cursor: 'default',
      alignItems: 'center',
      backgroundColor: theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.white,
      border: `${rem(1)} solid ${theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[4]
        }`,
      paddingLeft: theme.spacing.xs,
      borderRadius: theme.radius.sm,
    })}
    >
      <Box sx={{ lineHeight: 1, fontSize: rem(12) }} mr={10} className={notoColorEmoji.className}>{flag}</Box>
      <Box sx={{ lineHeight: 1, fontSize: rem(12) }}>{label}</Box>
      <CloseButton
        onMouseDown={onRemove}
        variant="transparent"
        size={22}
        iconSize={14}
        tabIndex={-1}
      />
    </Box>
  </div>
}

const Item = React.forwardRef<HTMLDivElement, SelectItemProps>(
  function SelectCountryItem({ label, value, ...others }, ref) {
    const flag = flags[value ?? "US"];
    return <div ref={ref} {...others}>
      <Flex align="center">
        <Box mr={10}>{flag}</Box>
        <div>{label}</div>
      </Flex>
    </div>
  });

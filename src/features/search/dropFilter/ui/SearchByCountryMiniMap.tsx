import React from 'react'
import { World as WorldIcon } from 'tabler-icons-react';
import World from "@shared/ui/index";
import { SVGMap } from "react-svg-map";
import { useAppDispatch, useAppSelector } from '@shared/lib';
import { search } from '@entities/search';
import { Popover, Flex, ActionIcon } from '@mantine/core';
import classes from "./SearchByCountryMiniMap.module.scss"


export const SearchByCountryMiniMap = () => {
  const dispatch = useAppDispatch()
  const countrySearch = useAppSelector(({ search }) => search.filterCountry).map(x => x.country)

  function onCountryClick(e: any) {
    const { id } = Object.entries(e.target).find(_x => _x[0].startsWith("__reactProps"))?.[1] as { id: string }

    if (countrySearch.includes(id)) {
      dispatch(search.removeCountryFilter({ country: id }))
    } else {
      // TODO: как включить страну в запрос
      dispatch(search.addCountryFilter({ country: id }))
    }
  }

  function isCountrySelected(e: any): boolean {
    return countrySearch.includes(e.id)
  }

  return <Popover
    transitionProps={{
      duration: 150,
      transition: 'pop-top-left',
      timingFunction: 'ease'
    }}
    withArrow
    position="bottom"
    shadow="md">
    <Popover.Target>
      <Flex align={"flex-end"}>
        <ActionIcon className={classes.filterWrapper}>
          <WorldIcon
            size={"2.125rem"}
            strokeWidth={1.5}
            color={'#212529'}
          />
        </ActionIcon>
      </Flex>
    </Popover.Target>
    <Popover.Dropdown w={"100%"}>
      <SVGMap
        map={World}
        isLocationSelected={isCountrySelected}
        onLocationClick={onCountryClick}
      />
    </Popover.Dropdown>
  </Popover>
}
import React, { useState } from 'react'
import { CheckboxSVGMap } from "react-svg-map";
import { Popover, MultiSelect } from '@mantine/core';
import World from "@shared/ui";
import classes from "./SearchByCountry.module.scss"
import {
  Box, CloseButton, rem, Flex,
  SelectItemProps, MultiSelectValueProps,
} from '@mantine/core';
import "react-svg-map/lib/index.css";

export const SearchByCountry = () => {
  const [search, setSearch] = useState([])

  function onCountryChange(e: any) {
    const values = e
      .map((x: any) => Object.entries(x).find(_x => _x[0].startsWith("__reactProps"))?.[1])
      .map((x: any) => x.id)
    console.log(values);
    setSearch(values)
  }

  return <Popover position="bottom" withArrow shadow="md">
    <Popover.Target>
      <div>
        <MultiSelect
          style={{ pointerEvents: "none" }}
          data={countriesData}
          limit={20}
          className={classes.filter}
          value={search}
          valueComponent={Value}
          itemComponent={Item}
          readOnly
          placeholder="United States"
          label="Location" />
      </div>
    </Popover.Target>
    <Popover.Dropdown w={"100%"}>
      <div className={classes.miniSvgMap}>
        <CheckboxSVGMap map={World} onChange={onCountryChange} />
      </div>
    </Popover.Dropdown>
  </Popover>
}


const countriesData = [
  { label: 'United States', value: 'US'.toLocaleLowerCase() },
  { label: 'Great Britain', value: 'GB'.toLocaleLowerCase() },
  { label: 'Finland', value: 'FI'.toLocaleLowerCase() },
  { label: 'France', value: 'FR'.toLocaleLowerCase() },
  { label: 'Russia', value: 'RU'.toLocaleLowerCase() },
];

const flags: { [key: string]: string } = {
  "US": 'US',
  "GB": 'GB',
  "FI": 'FI',
  "FR": 'FR',
  "RU": 'RU',
};

function Value({
  value,
  label,
  onRemove,
  classNames,
  ...others
}: MultiSelectValueProps & { value: string }) {
  const flag = flags[value ?? "US"];
  return (
    <div {...others}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          cursor: 'default',
          alignItems: 'center',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[4]
            }`,
          paddingLeft: theme.spacing.xs,
          borderRadius: theme.radius.sm,
        })}
      >
        <Box mr={10}>
          {flag}
        </Box>
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
  );
}

const Item = React.forwardRef<HTMLDivElement, SelectItemProps>(
  function SelectCountryItem({ label, value, ...others }, ref) {
    const flag = flags[value ?? "US"];
    return (
      <div ref={ref} {...others}>
        <Flex align="center">
          <Box mr={10}>
            {flag}
          </Box>
          <div>{label}</div>
        </Flex>
      </div>
    );
  });
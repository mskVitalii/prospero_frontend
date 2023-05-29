import { Center, Box } from "@mantine/core";
import {
  News as PublisherIcon,
  Users as PeopleIcon,
  GoGame as CategoryIcon,
  World as CountryIcon,
} from "tabler-icons-react"

export const feedAggregationData = [{
  value: 'Категории',
  label: (<Center>
    <CategoryIcon size="1rem" />
    <Box ml={10}>Категориям</Box>
  </Center>),
}, {
  value: 'Издания',
  label: <Center>
    <PublisherIcon size="1rem" />
    <Box ml={10}>Изданиям</Box>
  </Center>
}, {
  value: 'Люди',
  label: <Center>
    <PeopleIcon size="1rem" />
    <Box ml={10}>Людям</Box>
  </Center>
}, {
  value: 'Страны',
  label: <Center>
    <CountryIcon size="1rem" />
    <Box ml={10}>Странам</Box>
  </Center>
}] 
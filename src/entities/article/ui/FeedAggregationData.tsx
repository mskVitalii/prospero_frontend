import { Center, Box } from "@mantine/core";
import {
  News as PublisherIcon,
  Users as PeopleIcon,
  GoGame as CategoryIcon,
  World as CountryIcon,
  CalendarTime as TimeIcon,
  MessageLanguage as LanguageIcon,
} from "tabler-icons-react"


export const feedAggregationData = [
  {
    value: 'Страны',
    label: <Center>
      <CountryIcon size="1rem" />
      <Box ml={10}>Странам</Box>
    </Center>
  },
  {
    value: 'Дата',
    label: <Center>
      <TimeIcon size="1rem" />
      <Box ml={10}>Дате</Box>
    </Center>
  },
  {
    value: 'Издания',
    label: <Center>
      <PublisherIcon size="1rem" />
      <Box ml={10}>Изданиям</Box>
    </Center>
  },
  {
    value: 'Категории',
    label: (<Center>
      <CategoryIcon size="1rem" />
      <Box ml={10}>Категориям</Box>
    </Center>),
  },
  {
    value: 'Люди',
    label: <Center>
      <PeopleIcon size="1rem" />
      <Box ml={10}>Людям</Box>
    </Center>
  },
  {
    value: 'Языки',
    label: <Center>
      <LanguageIcon size="1rem" />
      <Box ml={10}>Языкам</Box>
    </Center>
  },
] 
import React, { ReactNode } from 'react'
import { SearchString, search } from '@entities/search'
import { useAppDispatch } from '@shared/lib'
import { Group } from '@mantine/core'
import { Blockquote } from 'tabler-icons-react'
import classes from "./SearchOperatorEXACT.module.css"
import classNames from 'classnames'

type Props = {
  searchString: SearchString
  children: ReactNode
}

export const SearchOperatorEXACT = (props: Props) => {
  const dispatch = useAppDispatch()

  function toggleExactString() {
    dispatch(search.toggleExactSearchString(props.searchString))
  }

  // props.searchString.isExact

  return <Group
    className={classNames(classes.exact, {
      [classes.exactTrue]: props.searchString.isExact
    })}
    onClick={toggleExactString}>

    <Blockquote
      className={classes.quote}
      size={"3.125rem"}
      strokeWidth={1.7}
      color={props.searchString.isExact ? '#212529' : 'gray'}
    />
    {props.children}
  </Group>
}

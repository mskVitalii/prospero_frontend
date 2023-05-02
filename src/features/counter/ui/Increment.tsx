import React from 'react'
import { useAppDispatch } from '@shared/lib'
import { CounterButton, counter } from '@entities/counter'


export const Increment = () => {
  const dispatch = useAppDispatch()

  return <CounterButton
    aria-label="Increment value"
    onClick={() => dispatch(counter.increment())}
  >
    +
  </CounterButton>
}
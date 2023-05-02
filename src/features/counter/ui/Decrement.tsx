import React from 'react'
import { useAppDispatch } from '@shared/lib'
import { CounterButton, counter } from '@entities/counter'


export const Decrement = () => {
  const dispatch = useAppDispatch()

  return <CounterButton
    aria-label="Decrement value"
    onClick={() => dispatch(counter.decrement())}
  >
    -
  </CounterButton>
}

import React from 'react'
import { useAppDispatch } from '@shared/lib'
import { CounterButton, counter } from '@entities/counter'


type Props = {
  amount: number
}

export const IncrementIfOdd = ({ amount }: Props) => {
  const dispatch = useAppDispatch()

  return <CounterButton
    onClick={() => dispatch(counter.incrementIfOdd(amount))}
  >
    Add if odd
  </CounterButton>
}

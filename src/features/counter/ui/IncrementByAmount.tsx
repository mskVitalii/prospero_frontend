import React from 'react'
import { useAppDispatch } from '@shared/lib'
import { CounterButton, counter } from '@entities/counter'


type Props = {
  amount: number
}

export const IncrementByAmount = ({ amount }: Props) => {
  const dispatch = useAppDispatch()

  return <CounterButton
    onClick={() => dispatch(counter.incrementByAmount(amount))}
  >
    Add Amount
  </CounterButton>
}

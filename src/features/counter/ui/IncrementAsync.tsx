import React from 'react'
import { CounterButtonAsync, counter } from '@entities/counter'
import { useAppDispatch } from '@shared/lib/hooks'

type Props = {
  amount: number
}

export const IncrementAsync = ({ amount }: Props) => {
  const dispatch = useAppDispatch()

  return <CounterButtonAsync
    onClick={() => dispatch(counter.incrementAsync(amount))}>
    Add Async
  </CounterButtonAsync>
}

import React from 'react'
import CounterButtonAsync from '@/entities/counter/CounterButtonAsync'
import { incrementAsync } from './counterSlice'
import { useAppDispatch } from '@/shared/lib/hooks'

type Props = {
  amount: number
}

const IncrementAsync = ({ amount }: Props) => {
  const dispatch = useAppDispatch()

  return <CounterButtonAsync
    onClick={() => dispatch(incrementAsync(amount))}>
    Add Async
  </CounterButtonAsync>
}

export default IncrementAsync
import React from 'react'
import { useAppDispatch } from '@/shared/lib/hooks'
import { incrementByAmount } from '@/features/counter/counterSlice'
import CounterButton from '@/entities/counter/CounterButton'


type Props = {
  amount: number
}

export default function IncrementByAmount({ amount }: Props) {
  const dispatch = useAppDispatch()

  return <CounterButton
    onClick={() => dispatch(incrementByAmount(amount))}
  >
    Add Amount
  </CounterButton>
}

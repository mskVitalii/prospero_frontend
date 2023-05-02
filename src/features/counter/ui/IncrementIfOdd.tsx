import React from 'react'
import CounterButton from '@entities/counter/ui/CounterButton'
import { useAppDispatch } from '@shared/lib/hooks'
import { incrementIfOdd } from '@entities/counter/model/counterSlice'


type Props = {
  amount: number
}

const IncrementIfOdd = ({ amount }: Props) => {
  const dispatch = useAppDispatch()

  return <CounterButton
    onClick={() => dispatch(incrementIfOdd(amount))}
  >
    Add if odd
  </CounterButton>
}

export default IncrementIfOdd
import React from 'react'
import CounterButton from '@/entities/counter/CounterButton'
import { useAppDispatch } from '@/shared/lib/hooks'
import { increment } from './counterSlice'


const Increment = () => {
  const dispatch = useAppDispatch()

  return <CounterButton
    aria-label="Increment value"
    onClick={() => dispatch(increment())}
  >
    +
  </CounterButton>
}

export default Increment
import React from 'react'
import CounterButton from '@/entities/counter/CounterButton'
import { useAppDispatch } from '@/shared/lib/hooks'
import { decrement } from './counterSlice'


const Decrement = () => {
  const dispatch = useAppDispatch()

  return <CounterButton
    aria-label="Decrement value"
    onClick={() => dispatch(decrement())}
  >
    -
  </CounterButton>
}

export default Decrement
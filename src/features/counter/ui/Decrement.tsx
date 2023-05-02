import React from 'react'
import { useAppDispatch } from '@shared/lib/hooks'
import { decrement } from '@entities/counter/model/counterSlice'
import CounterButton from '@entities/counter/ui/CounterButton'


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
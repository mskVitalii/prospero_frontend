import React from 'react'
import { useAppDispatch } from '@shared/lib/hooks'
import { increment } from '@entities/counter/model/counterSlice'
import CounterButton from '@entities/counter/ui/CounterButton'


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
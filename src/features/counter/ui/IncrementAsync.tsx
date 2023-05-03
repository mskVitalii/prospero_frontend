import React from 'react'
import { CounterButtonAsync, useFetchCountMutation, counter } from '@entities/counter'
import { useAppDispatch } from '@shared/lib'

type Props = {
  amount: number
}
export const IncrementAsync = ({ amount }: Props) => {
  const [addAmounAsync, { data, error, isLoading }] = useFetchCountMutation()
  const dispatch = useAppDispatch()

  async function addAsyncOnClick() {
    const response = await addAmounAsync(amount)
    const increment = (response as { data: number }).data
    dispatch(counter.incrementByAmount(increment))
  }

  return <CounterButtonAsync onClick={addAsyncOnClick}>
    Add Async ({data}, {JSON.stringify(error, null, 2)}, {isLoading ? "загрузка" : "нет загрузки"})
  </CounterButtonAsync>
}

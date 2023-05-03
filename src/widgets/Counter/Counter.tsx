import { useState } from 'react'
import { useAppSelector } from '@shared/lib'
import { counter } from '@entities/counter'
import styles from './Counter.module.scss'
import {
  IncrementByAmount,
  IncrementAsync,
  IncrementIfOdd,
  Increment,
  Decrement
} from '@features/counter'


export const Counter = () => {
  const count = useAppSelector(counter.selectCount)
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  return <div>

    <div className={styles.row}>
      <Decrement />
      <span className={styles.value}>{count}</span>
      <Increment />
    </div>
    <div className={styles.row}>
      <input
        className={styles.textbox}
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <IncrementByAmount amount={incrementValue} />
      <IncrementAsync amount={incrementValue} />
      <IncrementIfOdd amount={incrementValue} />
    </div>

  </div>
}

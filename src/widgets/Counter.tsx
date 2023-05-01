import { useState } from 'react'
import { useAppSelector } from '@/shared/lib/hooks'
import { selectCount } from '@/features/counter/counterSlice'
import styles from './Counter.module.scss'
import IncrementByAmount from '@/features/counter/IncrementByAmount'
import IncrementAsync from '@/features/counter/IncrementAsync'
import IncrementIfOdd from '@/features/counter/IncrementIfOdd'
import Increment from '@/features/counter/Increment'
import Decrement from '@/features/counter/Decrement'

function Counter() {
  const count = useAppSelector(selectCount)
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

export default Counter
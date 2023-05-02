import { useState } from 'react'
import { useAppSelector } from '@shared/lib/hooks'
import { selectCount } from '@entities/counter/model/counterSlice'
import styles from './Counter.module.scss'
import IncrementByAmount from '@features/counter/ui/IncrementByAmount'
import IncrementAsync from '@features/counter/ui/IncrementAsync'
import IncrementIfOdd from '@features/counter/ui/IncrementIfOdd'
import Increment from '@features/counter/ui/Increment'
import Decrement from '@features/counter/ui/Decrement'

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
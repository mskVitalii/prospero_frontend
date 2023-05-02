import React, { HTMLAttributes } from 'react'
import styles from "./CounterButton.module.scss"


const CounterButton = (props: HTMLAttributes<HTMLButtonElement>) =>
  <button className={styles.button} {...props} />

export default CounterButton
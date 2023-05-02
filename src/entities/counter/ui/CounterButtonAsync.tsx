import React, { HTMLAttributes } from 'react'
import styles from "./CounterButton.module.scss"


const CounterButtonAsync = (props: HTMLAttributes<HTMLButtonElement>) =>
  <button className={styles.asyncButton} {...props} />

export default CounterButtonAsync
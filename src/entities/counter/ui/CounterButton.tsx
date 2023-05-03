import React, { HTMLAttributes } from 'react'
import styles from "./CounterButton.module.scss"


export const CounterButton = (props: HTMLAttributes<HTMLButtonElement>) =>
  <button className={styles.button} {...props} />

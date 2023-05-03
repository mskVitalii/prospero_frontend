import React, { HTMLAttributes } from 'react'
import styles from "./CounterButton.module.scss"


export const CounterButtonAsync = (props: HTMLAttributes<HTMLButtonElement>) =>
  <button className={styles.asyncButton} {...props} />

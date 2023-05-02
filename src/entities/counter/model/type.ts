export type CounterState = {
  value: number
  status: 'idle' | 'loading' | 'failed'
}
import { DECREASE, INCREASE, INCREASE_BY_VALUE, RESET } from './constants'

const decrease = () => ({ type: DECREASE })

const increase = () => ({ type: INCREASE })

const reset = () => ({ type: RESET, payload: 0 })

const increaseByValue = (value) => ({ type: INCREASE_BY_VALUE, payload: value })

export { decrease, increase, increaseByValue, reset }

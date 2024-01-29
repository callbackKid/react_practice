import { useDispatch, useSelector } from 'react-redux'
import { change_by_value, decrease, increase, reset } from '../../store/counterSlice'

export const Counter = () => {
  const counter = useSelector((store) => store.counter.counter)
  // console.log(decrease.type) //counter/decrease
  const dispatch = useDispatch()
  console.log(counter)
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(change_by_value(5))}>+5</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </div>
  )
}

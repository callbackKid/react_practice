import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, increaseByValue, reset } from '../../store/actionCreators'

export const Counter = () => {
  // позволяет получить значение из store
  // принимает в себя CALLBACK
  //You must pass a selector to useSelector
  const counter = useSelector((store) => store.counter)
  // ОН позволяет отправить наши действия(actions) в reducer
  // action -> объект у которого два поля - type и payload
  //   const action = {
  //     type: 'TYPE',
  //     payload: 'OPTIONAL',
  //   }
  // action в dispatch
  const dispatch = useDispatch()
  console.log(counter)
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(increaseByValue(5))}>+5</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </div>
  )
}

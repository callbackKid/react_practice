import { useEffect, useState } from 'react'
import { UserList } from './components/UserList/UserList'
import { Product } from './components/Product/Product'

function App() {
  const [value, setValue] = useState(Number(localStorage.getItem('item')) ?? 0)
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    localStorage.setItem('item', value)
  }, [value]) // useEffect один раз - когда компонентся поднялся/отрисовался

  const clickHandler = () => {
    setValue(value + 1)
  }
  return (
    <div className="App">
      <Product />
      <UserList />
      {value}
      <button onClick={clickHandler}>click</button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle ? 'a' : 'b'}
    </div>
  )
}

export default App

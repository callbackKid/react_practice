import { Outlet } from 'react-router-dom'
import { Counter } from './components/Counter/Counter'
import { Header } from './layout/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <Outlet />
    </div>
  )
}

export default App

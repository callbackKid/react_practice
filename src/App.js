import { Outlet } from 'react-router-dom'
import AugmentedImage from './components/AugmentedImage/AugmentedImage'
import { Header } from './layout/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <AugmentedImage />
      <Outlet />
    </div>
  )
}

export default App

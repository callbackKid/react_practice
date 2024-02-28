import DeleteIcon from '@mui/icons-material/Delete'
import { Outlet } from 'react-router-dom'
import { CustomButtons } from './UI/Button/Button'
import { Header } from './layout/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <DeleteIcon />
      <CustomButtons />
      <Outlet />
    </div>
  )
}

export default App

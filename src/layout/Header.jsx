import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { changeColors, resetColor } from '../store/colorSlice'
import { changeTheme } from '../store/themeSlice'
import classes from './Header.module.css'

// 10) в Header создать кнопку изменения темы
// 11) импортировать useDispatch
// 12) через dispatch изменять на нажатие состояние

// 13) добавить редьюсер в стор
export const Header = () => {
  const dispatch = useDispatch()
  return (
    <header>
      <button onClick={() => dispatch(changeTheme())}>THEME</button>
      <button onClick={() => dispatch(changeColors())}>Change Color</button>
      <button onClick={() => dispatch(resetColor())}>Reset Color</button>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/todos"
              className={({ isActive, isPending }) =>
                isPending ? classes.pending : isActive ? classes.active : ''
              }
            >
              Todos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? classes.pending : isActive ? classes.active : ''
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive, isPending }) =>
                isPending ? classes.pending : isActive ? classes.active : ''
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive, isPending }) =>
                isPending ? classes.pending : isActive ? classes.active : ''
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

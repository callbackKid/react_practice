import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

export const Header = () => {
  return (
    <header>
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
              to="/posts"
              className={({ isActive, isPending }) =>
                isPending ? classes.pending : isActive ? classes.active : ''
              }
            >
              Posts
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
        </ul>
      </nav>
    </header>
  )
}

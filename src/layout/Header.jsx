import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/todos">Todos</NavLink>
          </li>
          {/* <li>
            <NavLink to="/posts">Posts</NavLink>
          </li> */}
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

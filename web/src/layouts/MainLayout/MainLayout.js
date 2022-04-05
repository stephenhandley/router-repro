import { NavLink, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to={routes.home()}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to={routes.foo()}>
              foo
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to={routes.bar()}>
              bar
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default MainLayout

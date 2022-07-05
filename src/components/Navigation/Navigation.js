import { getValue } from '@testing-library/user-event/dist/utils';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      exact={getValue.toString()}
      to="/*"
      className={({ isActive }) => (isActive ? s.activeLink : s.link)}
    >
      Home
    </NavLink>

    <NavLink
      to="/movies"
      className={({ isActive }) => (isActive ? s.activeLink : s.link)}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;

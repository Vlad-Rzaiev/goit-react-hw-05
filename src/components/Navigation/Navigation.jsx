import clsx from 'clsx';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const biuldLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink to="/" className={biuldLinkClass}>
              Home
            </NavLink>
          </li>
          <li className={css.item}>
            <NavLink to="/movies" className={biuldLinkClass}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

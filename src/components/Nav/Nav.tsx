// filepath: src/components/Nav/Nav.tsx
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/resume">Resume</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

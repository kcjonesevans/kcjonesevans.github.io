// filepath: src/components/Footer/Footer.tsx
import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* TODO: Add copyright, links, etc. */}
      <small>&copy; {new Date().getFullYear()} K.C. Jones Evans</small>
    </footer>
  );
}

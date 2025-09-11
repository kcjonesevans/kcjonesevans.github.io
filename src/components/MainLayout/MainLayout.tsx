// filepath: src/components/MainLayout/MainLayout.tsx
import React from 'react';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import styles from './MainLayout.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <Header />
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

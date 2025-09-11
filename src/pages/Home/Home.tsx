// filepath: src/pages/Home/Home.tsx
import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';

import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.homeLayout}>
        <Sidebar />
        <section className={styles.homeMain}>
          <h2>Welcome to K.C. Jones Evans</h2>
          <p>This is the new React-powered homepage. Content migration in progress!</p>
        </section>
      </div>
    </MainLayout>
  );
}

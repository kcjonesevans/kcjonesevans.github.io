// filepath: src/pages/Home/Home.tsx
import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Home() {
  return (
    <MainLayout>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
        <Sidebar />
        <section style={{ flex: 1 }}>
          <h2>Welcome to K.C. Jones Evans</h2>
          <p>This is the new React-powered homepage. Content migration in progress!</p>
        </section>
      </div>
    </MainLayout>
  );
}

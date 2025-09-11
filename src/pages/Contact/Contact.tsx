// filepath: src/pages/Contact/Contact.tsx
import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';

export default function Contact() {
  return (
    <MainLayout>
      <section style={{ maxWidth: 700, margin: '2rem auto', background: '#f7f9fc', borderRadius: '0.5rem', padding: '2rem' }}>
        <h2>Contact</h2>
        <p>You can reach me at <a href="mailto:kcjonesevans@gmail.com">kcjonesevans@gmail.com</a> or via social links below:</p>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
          <li><a href="https://twitter.com/kcjonesevans" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>
          <li><a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>
          <li><a href="http://github.com/kcjonesevans" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /></a></li>
          <li><a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
        </ul>
      </section>
    </MainLayout>
  );
}

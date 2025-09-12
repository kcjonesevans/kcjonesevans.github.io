// filepath: src/pages/About/About.tsx
import MainLayout from '../../components/MainLayout/MainLayout';
import styles from '../Home/Home.module.scss';
import headshot from '../../assets/img/headshot_square_small.png';

export default function About() {
  return (
    <MainLayout>
      <section style={{ maxWidth: 700, margin: '2rem auto', background: '#f7f9fc', borderRadius: '0.5rem', padding: '2rem' }}>
        <h2>About K.C. Jones Evans</h2>
        <img src={headshot} alt="K.C. Jones Evans" style={{ width: 120, borderRadius: '50%', marginBottom: '1rem' }} />
        <p><strong>Software Engineer, UX Engineer, Solutions Advisor</strong></p>
        <p>Leading user experience engineering, developing and designing web applications with Angular, React/Redux and Node. Passionate about web, cloud, and data. Experienced in geospatial, information retrieval, and open source technologies.</p>
        <h3>Contact</h3>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }} className={styles.socialLinks}>
          <li><a href="http://github.com/kcjonesevans" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /></a></li>
          <li><a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
          <li><a href="mailto:kcjonesevans@gmail.com"><i className="fa fa-envelope-o" /></a></li>
        </ul>
      </section>
    </MainLayout>
  );
}

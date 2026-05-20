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
        <p><strong>Lead Senior Software Engineer</strong></p>
        <p>
          I'm a lead senior software engineer at Applied Information Sciences, based in the United States. Over fifteen years ago I started
          writing software for a small geospatial-and-open-source-intel team at SAIC; since then I have led UI engineering across enterprise
          modernizations, energy-sector design systems, and lately AI-first product work on Azure AI Foundry with Domain-Driven Design at the seams.
        </p>
        <p>
          I'm best when there is a real person on the other side of the screen and a real engineering team behind it. I like the seams: what
          the data has to look like, what the API has to promise, what the interface ends up feeling like when you use it on a slow Wednesday.
          I write at that intersection.
        </p>
        <p>
          I taught with <strong>Girl Develop It Dayton</strong> from 2015 to 2018, which is where I found the confidence to speak my mind - and
          learned that people actually wanted to know what I thought. When I'm not at a keyboard you will find me with my daughter <strong>Rowyn</strong> or
          petting a cat named <strong>Sunny</strong>, trying to grow something in a chunk of garden I am slowly losing to mint, or losing myself
          in a longer book than I have time for.
        </p>
        <h3>Contact</h3>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }} className={styles.socialLinks}>
          <li><a href="http://github.com/kcjonesevans" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /></a></li>
          <li><a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
          <li><a href="mailto:kcjonesevans@proton.me"><i className="fa fa-envelope-o" /></a></li>
        </ul>
      </section>
    </MainLayout>
  );
}

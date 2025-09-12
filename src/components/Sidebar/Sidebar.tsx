// filepath: src/components/Sidebar/Sidebar.tsx
import styles from './Sidebar.module.scss';
import headshot from '../../assets/img/headshot_square_small.png';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <header>
        <div className={styles.about}>
          <div className={styles.coverAuthorImage}>
            <a href="/">
              <img src={headshot} alt="K.C. Jones Evans" />
            </a>
          </div>
          <div className={styles.authorName}>K.C. Jones Evans</div>
          <p>Software Engineer, UX Engineer, Solutions Advisor. Passionate about web, cloud, and data.</p>
        </div>
      </header>
      <footer>
        <section className={styles.contact}>
          <h3>Contact me</h3>
          <ul className={styles.socialLinks}>
            <li><a href="http://github.com/kcjonesevans" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /></a></li>
            <li><a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
            <li><a href="mailto:kcjonesevans@gmail.com"><i className="fa fa-envelope-o" /></a></li>
          </ul>
        </section>
        <div className={styles.copyright}>
          <p>{new Date().getFullYear()} &copy; K.C. Jones Evans</p>
        </div>
      </footer>
    </aside>
  );
}

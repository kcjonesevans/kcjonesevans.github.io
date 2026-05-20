// filepath: src/components/Footer/Footer.tsx
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <ul className={styles.socialLinks}>
          <li>
            <a href="https://github.com/kcjonesevans" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="mailto:kcjonesevans@proton.me" aria-label="Email">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <nav className={styles.footerNav}>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/resume">Resume</a></li>
          </ul>
        </nav>
        <small>&copy; {new Date().getFullYear()} K.C. Jones Evans &nbsp;|&nbsp; All Rights Reserved.</small>
       
      </div>
    </footer>
  );
}

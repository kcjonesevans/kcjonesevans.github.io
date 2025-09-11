// filepath: src/components/Header/Header.tsx
import styles from './Header.module.scss';
import catLogo from '../../assets/img/Sunny_small.jpg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img src={catLogo} alt="Cat logo" className={styles.logo} />
        <h1>K.C. Jones Evans</h1>
      </div>
    </header>
  );
}

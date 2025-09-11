// filepath: src/pages/Blog/components/Pagination.tsx
import styles from '../Blog.module.scss';

type Props = {
  current: number;
  total: number;
  onPage: (page: number) => void;
};

export default function Pagination({ current, total, onPage }: Props) {
  return (
    <nav className={styles.pagination}>
      <button
        className={styles.paginationBtn}
        onClick={() => onPage(current - 1)}
        disabled={current === 1}
      >
        Previous
      </button>
      <span>Page {current} of {total}</span>
      <button
        className={styles.paginationBtn}
        onClick={() => onPage(current + 1)}
        disabled={current === total}
      >
        Next
      </button>
    </nav>
  );
}

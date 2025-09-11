// filepath: src/pages/Blog/Blog.tsx
import React from 'react';
import { useState } from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import { posts } from './posts';
import styles from './Blog.module.scss';
import Pagination from './components/Pagination';

const POSTS_PER_PAGE = 3;

export default function Blog() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginated = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <MainLayout>
      <section className={styles.blog}>
        <h2>Blog</h2>
        <ul className={styles.postList}>
          {paginated.map(post => (
            <li key={post.title} className={styles.postItem}>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postDate}><em>{post.date}</em></p>
              <p className={styles.postDesc}>{post.description}</p>
              {post.img && <img src={`${post.img}`} alt={post.title} className={styles.postImg} />}
              <div className={styles.postTags}>
                {post.tags.map(tag => (
                  <span key={tag} className={styles.postTag}>{tag}</span>
                ))}
              </div>
              {post.url && (
                <p><a href={post.url} target="_blank" rel="noopener noreferrer" className={styles.readMore}>Read more</a></p>
              )}
            </li>
          ))}
        </ul>
        <Pagination current={page} total={totalPages} onPage={setPage} />
      </section>
    </MainLayout>
  );
}

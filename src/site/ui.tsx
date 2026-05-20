import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import type { Post, WorkProject } from './data';

const ICONS: Record<string, ReactNode> = {
  github: <svg viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>,
  linkedin: <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
  mail: <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"></rect><polyline points="22,6 12,13 2,6"></polyline></svg>,
  external: <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15,3 21,3 21,9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>,
  download: <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7,10 12,15 17,10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
};

const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/work', label: 'Work' },
  { path: '/blog', label: 'Writing' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' }
];

export function Icon({ name, size = 18 }: { name: string; size?: number }) {
  return (
    <span className="icon" style={{ width: size, height: size }}>
      {ICONS[name] ?? null}
    </span>
  );
}

export function IconLink({ href, name, label, size = 20 }: { href: string; name: string; label: string; size?: number }) {
  const external = href.startsWith('http');
  return (
    <a className="icon-link" href={href} aria-label={label} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
      <Icon name={name} size={size} />
    </a>
  );
}

export function Eyebrow({ children, variant }: { children: ReactNode; variant?: string }) {
  const cls = variant ? `eyebrow eyebrow--${variant}` : 'eyebrow';
  return <div className={cls}>{children}</div>;
}

export function Tag({ children, variant = 'rose' }: { children: ReactNode; variant?: string }) {
  return <span className={variant === 'rose' ? 'tag' : `tag tag--${variant}`}>{children}</span>;
}

export function Button({
  variant = 'primary',
  children,
  href,
  onClick,
  icon,
  target,
  rel
}: {
  variant?: string;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: string;
  target?: string;
  rel?: string;
}) {
  const cls = `btn btn--${variant}`;
  const inner = (
    <>
      {children}
      {icon ? <Icon name={icon} size={14} /> : null}
    </>
  );

  if (href) {
    return (
      <a className={cls} href={href} onClick={onClick} target={target} rel={rel}>
        {inner}
      </a>
    );
  }

  return (
    <button className={cls} type="button" onClick={onClick}>
      {inner}
    </button>
  );
}

export function ArrowLink({ href, children, onClick }: { href: string; children: ReactNode; onClick?: () => void }) {
  return (
    <a className="arrow-link" href={href} onClick={onClick}>
      {children} <span className="arrow-glyph">→</span>
    </a>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="site-header__mark" to="/">
          <img className="site-header__avatar" src="/assets/sunny-cat-logo.jpg" alt="Sunny the cat - site mark" />
          <div className="site-header__wm">
            <span className="site-header__name">K.C. Jones Evans</span>
            <span className="site-header__tag">lead senior software engineer · frontend architect · AIS</span>
          </div>
        </NavLink>
        <div className="site-header__spacer"></div>
        <a className="site-header__rss" href="mailto:kcjonesevans@gmail.com" aria-label="Email K.C.">
          <Icon name="mail" size={16} /> say hello
        </a>
      </div>
    </header>
  );
}

export function Nav() {
  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.path} to={item.path} className={({ isActive }) => `site-nav__link ${isActive ? 'is-active' : ''}`} end={item.path === '/'}>
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="sidebar__avatar" src="/assets/headshot.png" alt="K.C. Jones Evans headshot" />
      <h2 className="sidebar__name">K.C. Jones Evans</h2>
      <p className="sidebar__role">lead senior software engineer</p>
      <p className="sidebar__bio">
        Frontend architect at AIS with 15+ years in the field. I work on the web, the cloud, and the data underneath - and I keep notes so I will remember.
      </p>
      <div className="sidebar__divider"></div>
      <p className="sidebar__contact-label">say hello</p>
      <div className="sidebar__socials">
        <IconLink href="https://github.com/kcjonesevans" name="github" label="GitHub" size={18} />
        <IconLink href="https://www.linkedin.com/" name="linkedin" label="LinkedIn" size={18} />
        <IconLink href="mailto:kcjonesevans@gmail.com" name="mail" label="Email" size={18} />
      </div>
      <NavLink className="sidebar__resume-link" to="/resume">
        read the long version <span className="arrow-glyph">→</span>
      </NavLink>
    </aside>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__left">
          <div className="site-footer__name">K.C. Jones Evans</div>
          <div className="site-footer__sub">Dayton, OH · she/her · still here</div>
        </div>
        <div className="site-footer__center">
          <nav className="site-footer__nav">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/blog">Writing</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
        <div className="site-footer__right">
          <div className="site-footer__socials">
            <IconLink href="https://github.com/kcjonesevans" name="github" label="GitHub" />
            <IconLink href="https://www.linkedin.com/" name="linkedin" label="LinkedIn" />
            <IconLink href="mailto:kcjonesevans@gmail.com" name="mail" label="Email" />
          </div>
          <small className="site-footer__copy">© {new Date().getFullYear()} K.C. Jones Evans</small>
        </div>
      </div>
    </footer>
  );
}

function PostThumb({ img }: { img: string }) {
  if (img === 'angular-brand') {
    return (
      <div className="post-thumb post-thumb--brand">
        <img src="/assets/icon-angular.svg" alt="Angular" />
      </div>
    );
  }

  if (!img) {
    return (
      <div className="post-thumb post-thumb--note">
        <span>hi.</span>
      </div>
    );
  }

  return <img className="post-thumb post-thumb--img" src={img} alt="" />;
}

export function formatDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toLowerCase();
}

export function PostCardCompact({ post, onOpen, tint }: { post: Post; onOpen: (url: string) => void; tint?: string }) {
  const cls = `post-card${tint ? ` post-card${tint}` : ''}`;
  const external = post.url.startsWith('http');

  return (
    <a
      className={cls}
      href={post.url}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={post.url.startsWith('#') ? (e) => {
        e.preventDefault();
        onOpen(post.url);
      } : undefined}
    >
      <div className="post-card__meta">
        {formatDate(post.date)}
        {post.soon ? <span className="post-card__soon">draft</span> : null}
      </div>
      <h3 className="post-card__title">{post.title}</h3>
      <p className="post-card__desc">{post.description}</p>
      <div className="post-card__tags">
        {post.tags.slice(0, 3).map((tag, index) => (
          <Tag key={tag} variant={['rose', 'sage', 'linen'][index % 3]}>{tag}</Tag>
        ))}
      </div>
      <div className="post-card__cta">
        <span className="arrow-link">{post.soon ? 'in progress' : 'read it'} <span className="arrow-glyph">→</span></span>
      </div>
    </a>
  );
}

export function PostCardRow({ post, onOpen, tint }: { post: Post; onOpen: (url: string) => void; tint?: string }) {
  const cls = `blog-row${tint ? ` blog-row${tint}` : ''}`;
  const external = post.url.startsWith('http');

  return (
    <a
      className={cls}
      href={post.url}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={post.url.startsWith('#') ? (e) => {
        e.preventDefault();
        onOpen(post.url);
      } : undefined}
    >
      <PostThumb img={post.img} />
      <div className="blog-row__body">
        <div className="blog-row__meta">
          {formatDate(post.date)}
          {post.soon ? <span className="post-card__soon">draft</span> : null}
        </div>
        <h3 className="blog-row__title">{post.title}</h3>
        <p className="blog-row__desc">{post.description}</p>
        <div className="blog-row__tags">
          {post.tags.map((tag, index) => (
            <Tag key={tag} variant={['rose', 'sage', 'linen'][index % 3]}>{tag}</Tag>
          ))}
        </div>
      </div>
    </a>
  );
}

export function WorkCard({ project }: { project: WorkProject }) {
  return (
    <article className={`work-card work-card--${project.tint}`}>
      <div className="work-card__head">
        <Eyebrow variant={project.tint === 'sage' ? 'sage' : project.tint === 'linen' ? 'slate' : 'rose'}>{project.role}</Eyebrow>
        <div className="work-card__period">{project.period}</div>
      </div>
      <h3 className="work-card__title">{project.title}</h3>
      <p className="work-card__blurb">{project.blurb}</p>
      <div className="work-card__stack">
        {project.stack.map((stack, index) => (
          <Tag key={stack} variant={['rose', 'sage', 'linen'][index % 3]}>{stack}</Tag>
        ))}
      </div>
    </article>
  );
}

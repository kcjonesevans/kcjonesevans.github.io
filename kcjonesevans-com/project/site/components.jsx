// Components — Header, Nav, Sidebar, Footer, Icon, Button, Tag, Eyebrow, post cards.
// Inline Lucide-style stroke SVGs.
const { useState, useEffect, useMemo } = React;

const ICONS = {
  github: (
    <svg viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"></rect><polyline points="22,6 12,13 2,6"></polyline></svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12,5 19,12 12,19"></polyline></svg>
  ),
  download: (
    <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7,10 12,15 17,10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
  ),
  external: (
    <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15,3 21,3 21,9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
  ),
  check: (
    <svg viewBox="0 0 24 24"><polyline points="20,6 9,17 4,12"></polyline></svg>
  ),
  pen: (
    <svg viewBox="0 0 24 24"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"></path></svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24"><path d="M17.5 19a4.5 4.5 0 1 0-1.5-8.75A6 6 0 0 0 4 12a4 4 0 0 0 4 7h9.5z"></path></svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"></path></svg>
  ),
  map: (
    <svg viewBox="0 0 24 24"><polygon points="1,6 1,22 8,18 16,22 23,18 23,2 16,6 8,2 1,6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24"><polygon points="12,2 2,7 12,12 22,7 12,2"></polygon><polyline points="2,17 12,22 22,17"></polyline><polyline points="2,12 12,17 22,12"></polyline></svg>
  ),
};

function Icon({ name, size = 18, ...rest }) {
  return (
    <span className="icon" style={{ width: size, height: size }} {...rest}>
      {ICONS[name] || null}
    </span>
  );
}

function IconLink({ href, name, label, size = 20, onClick }) {
  return (
    <a
      className="icon-link"
      href={href}
      aria-label={label}
      target={href && href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      onClick={onClick}
    >
      <Icon name={name} size={size} />
    </a>
  );
}

function Eyebrow({ children, variant }) {
  const cls = variant ? `eyebrow eyebrow--${variant}` : 'eyebrow';
  return <div className={cls}>{children}</div>;
}

function Tag({ children, variant = 'rose' }) {
  const cls = variant === 'rose' ? 'tag' : `tag tag--${variant}`;
  return <span className={cls}>{children}</span>;
}

function Button({ variant = 'primary', children, href, onClick, type, icon, target, rel, ...rest }) {
  const cls = `btn btn--${variant}`;
  const inner = (
    <React.Fragment>
      {children}
      {icon && <Icon name={icon} size={14} />}
    </React.Fragment>
  );
  if (href) return <a className={cls} href={href} onClick={onClick} target={target} rel={rel} {...rest}>{inner}</a>;
  return <button className={cls} onClick={onClick} type={type || 'button'} {...rest}>{inner}</button>;
}

function ArrowLink({ href, children, onClick, target, rel }) {
  return (
    <a className="arrow-link" href={href} onClick={onClick} target={target} rel={rel}>
      {children} <span className="arrow-glyph">→</span>
    </a>
  );
}

// --------- Layout ----------
function Header({ onNav }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__mark" href="#/" onClick={(e) => { e.preventDefault(); onNav('/'); }}>
          <img
            className="site-header__avatar"
            src="assets/sunny-cat-logo.jpg"
            alt="Sunny the cat — site mark"
          />
          <div className="site-header__wm">
            <span className="site-header__name">K.C. Jones Evans</span>
            <span className="site-header__tag">lead senior software engineer · frontend architect · AIS</span>
          </div>
        </a>
        <div className="site-header__spacer"></div>
        <a className="site-header__rss" href="mailto:kcjonesevans@gmail.com" aria-label="Email K.C.">
          <Icon name="mail" size={16} /> say hello
        </a>
      </div>
    </header>
  );
}

const NAV_ITEMS = [
  { path: '/',         label: 'Home' },
  { path: '/about',    label: 'About' },
  { path: '/work',     label: 'Work' },
  { path: '/blog',     label: 'Writing' },
  { path: '/resume',   label: 'Resume' },
  { path: '/contact',  label: 'Contact' },
];

function Nav({ current, onNav }) {
  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        {NAV_ITEMS.map(item => (
          <a
            key={item.path}
            className={'site-nav__link ' + (current === item.path ? 'is-active' : '')}
            href={'#' + item.path}
            onClick={(e) => { e.preventDefault(); onNav(item.path); }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Sidebar({ onNav }) {
  return (
    <aside className="sidebar">
      <img className="sidebar__avatar" src="assets/headshot.png" alt="K.C. Jones Evans headshot" />
      <h2 className="sidebar__name">K.C. Jones Evans</h2>
      <p className="sidebar__role">lead senior software engineer</p>
      <p className="sidebar__bio">
        Frontend architect at AIS with 15+ years in the field. I work on the web, the cloud, and the data underneath — and I keep notes so I&rsquo;ll remember.
      </p>
      <div className="sidebar__divider"></div>
      <p className="sidebar__contact-label">say hello</p>
      <div className="sidebar__socials">
        <IconLink href="https://github.com/kcjonesevans" name="github" label="GitHub" size={18} />
        <IconLink href="https://www.linkedin.com/" name="linkedin" label="LinkedIn" size={18} />
        <IconLink href="mailto:kcjonesevans@gmail.com" name="mail" label="Email" size={18} />
      </div>
      <a
        className="sidebar__resume-link"
        href="#/resume"
        onClick={(e) => { e.preventDefault(); onNav && onNav('/resume'); }}
      >
        read the long version <span className="arrow-glyph">→</span>
      </a>
    </aside>
  );
}

function Footer({ onNav }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__left">
          <div className="site-footer__name">K.C. Jones Evans</div>
          <div className="site-footer__sub">Dayton, OH · she/her · still here</div>
        </div>
        <div className="site-footer__center">
          <nav className="site-footer__nav">
            <a href="#/about" onClick={(e) => { e.preventDefault(); onNav('/about'); }}>About</a>
            <a href="#/work" onClick={(e) => { e.preventDefault(); onNav('/work'); }}>Work</a>
            <a href="#/blog" onClick={(e) => { e.preventDefault(); onNav('/blog'); }}>Writing</a>
            <a href="#/resume" onClick={(e) => { e.preventDefault(); onNav('/resume'); }}>Resume</a>
            <a href="#/contact" onClick={(e) => { e.preventDefault(); onNav('/contact'); }}>Contact</a>
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

// --------- Post thumb / cards ----------
function PostThumb({ img, title }) {
  if (img === 'angular-brand') {
    return (
      <div className="post-thumb post-thumb--brand">
        <img src="assets/icon-angular.svg" alt="Angular" />
      </div>
    );
  }
  if (img === 'note' || !img) {
    return (
      <div className="post-thumb post-thumb--note">
        <span>hi.</span>
      </div>
    );
  }
  return <img className="post-thumb post-thumb--img" src={img} alt="" />;
}

function PostCardCompact({ post, onOpen, tint }) {
  const cls = 'post-card' + (tint ? ' post-card' + tint : '');
  return (
    <a
      className={cls}
      href={post.url}
      target={post.url.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      onClick={post.url.startsWith('#') ? (e) => { e.preventDefault(); onOpen(post.url); } : undefined}
    >
      <div className="post-card__meta">
        {formatDate(post.date)}
        {post.soon && <span className="post-card__soon">draft</span>}
      </div>
      <h3 className="post-card__title">{post.title}</h3>
      <p className="post-card__desc">{post.description}</p>
      <div className="post-card__tags">
        {post.tags.slice(0, 3).map((t, i) => (
          <Tag key={t} variant={['rose','sage','linen'][i % 3]}>{t}</Tag>
        ))}
      </div>
      <div className="post-card__cta">
        <span className="arrow-link">{post.soon ? 'in progress' : 'read it'} <span className="arrow-glyph">→</span></span>
      </div>
    </a>
  );
}

function PostCardRow({ post, onOpen, tint }) {
  const cls = 'blog-row' + (tint ? ' blog-row' + tint : '');
  return (
    <a
      className={cls}
      href={post.url}
      target={post.url.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      onClick={post.url.startsWith('#') ? (e) => { e.preventDefault(); onOpen(post.url); } : undefined}
    >
      <PostThumb img={post.img} title={post.title} />
      <div className="blog-row__body">
        <div className="blog-row__meta">
          {formatDate(post.date)}
          {post.soon && <span className="post-card__soon">draft</span>}
        </div>
        <h3 className="blog-row__title">{post.title}</h3>
        <p className="blog-row__desc">{post.description}</p>
        <div className="blog-row__tags">
          {post.tags.map((t, i) => (
            <Tag key={t} variant={['rose','sage','linen'][i % 3]}>{t}</Tag>
          ))}
        </div>
      </div>
    </a>
  );
}

// --------- Work card ----------
function WorkCard({ project, onOpen }) {
  const cls = 'work-card work-card--' + (project.tint || 'rose');
  return (
    <article className={cls}>
      <div className="work-card__head">
        <Eyebrow variant={project.tint === 'sage' ? 'sage' : (project.tint === 'linen' ? 'slate' : 'rose')}>
          {project.role}
        </Eyebrow>
        <div className="work-card__period">{project.period}</div>
      </div>
      <h3 className="work-card__title">{project.title}</h3>
      <p className="work-card__blurb">{project.blurb}</p>
      <div className="work-card__stack">
        {project.stack.map((s, i) => (
          <Tag key={s} variant={['rose','sage','linen'][i % 3]}>{s}</Tag>
        ))}
      </div>
    </article>
  );
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toLowerCase();
  } catch (e) { return iso; }
}

Object.assign(window, {
  Icon, IconLink, Eyebrow, Tag, Button, ArrowLink,
  Header, Nav, Sidebar, Footer,
  PostCardCompact, PostCardRow, PostThumb,
  WorkCard,
  formatDate, NAV_ITEMS,
});

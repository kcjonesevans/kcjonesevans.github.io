// Screens — Home, About, Work, Blog, Resume, Contact
const { useState: useStateS } = React;

function Home({ onNav, currentlyText }) {
  const posts = window.POSTS;
  const recent = posts.slice(0, 4);
  const now = window.NOW;
  const cardTints = ['', '--sage', '--rose', '--linen'];
  const currently = currentlyText || 'leading a multi-team platform modernization and designing UX for AI agent workflows';

  return (
    <div className="home" data-screen-label="01 Home">
      <Sidebar onNav={onNav} />
      <div className="home__hero">
        <Eyebrow variant="rose">hello there</Eyebrow>
        <h1>Hi, I&rsquo;m K.C.</h1>
        <p className="home__lede">
          I&rsquo;m a lead senior software engineer at <strong>Applied Information Sciences</strong>.
          Fifteen-plus years in, I architect systems, modernize design systems, and shepherd cross-functional
          teams through the noisy middle of a migration. Lately, a lot of AI agents and Domain-Driven Design.
        </p>
        <div className="home__currently">
          <span className="dot"></span>
          <span><strong>currently</strong> — {currently}</span>
        </div>

        <div className="home__rail">
          <div className="home__rail-head">
            <h2 className="home__section-h">What I&rsquo;m on right now</h2>
            <ArrowLink href="#/work" onClick={(e) => { e.preventDefault(); onNav('/work'); }}>see all work</ArrowLink>
          </div>
          <div className="home__now-grid">
            {now.map((n) => (
              <article key={n.id} className={'home__now-card home__now-card--' + n.tint}>
                <div className="home__now-meta">{n.role} · {n.period}</div>
                <h3 className="home__now-title">{n.title}</h3>
                <div className="home__now-ps">
                  <div className="home__now-ps-row">
                    <span className="home__now-ps-label">problem</span>
                    <p>{n.problem}</p>
                  </div>
                  <div className="home__now-ps-row">
                    <span className="home__now-ps-label">approach</span>
                    <p>{n.solution}</p>
                  </div>
                </div>
                <div className="home__now-stack">
                  {n.stack.map((s, i) => (
                    <Tag key={s} variant={['rose','sage','linen'][i % 3]}>{s}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="home__rail">
          <div className="home__rail-head">
            <h2 className="home__section-h">Recent writing</h2>
            <ArrowLink href="#/blog" onClick={(e) => { e.preventDefault(); onNav('/blog'); }}>all writing</ArrowLink>
          </div>
          <div className="home__posts">
            {recent.map((p, i) => (
              <PostCardCompact
                key={p.title}
                post={p}
                tint={cardTints[i % cardTints.length]}
                onOpen={(u) => onNav(u.replace('#',''))}
              />
            ))}
          </div>
        </div>

        <div className="home__cta-row">
          <Button variant="primary" onClick={() => onNav('/contact')} icon="arrow">Drop me a line</Button>
          <Button variant="secondary" onClick={() => onNav('/resume')} icon="download">Resume</Button>
        </div>
      </div>
    </div>
  );
}

function About({ onNav }) {
  return (
    <div className="about" data-screen-label="02 About">
      <div className="about__avatar-wrap">
        <img className="about__avatar" src="assets/headshot.png" alt="K.C. Jones Evans" />
        <div className="about__avatar-name">K.C. Jones Evans</div>
        <div className="about__avatar-role">lead senior software engineer · AIS</div>
        <div className="sidebar__socials about__socials">
          <IconLink href="https://github.com/kcjonesevans" name="github" label="GitHub" size={18} />
          <IconLink href="https://www.linkedin.com/" name="linkedin" label="LinkedIn" size={18} />
          <IconLink href="mailto:kcjonesevans@gmail.com" name="mail" label="Email" size={18} />
        </div>
      </div>
      <div className="about__body">
        <Eyebrow variant="sage">about</Eyebrow>
        <h1>I work on the web, the cloud, and the data underneath.</h1>
        <p>
          I&rsquo;m a lead senior software engineer at Applied Information Sciences, based in the United States.
          Over fifteen years ago I started writing software for a small geospatial-and-open-source-intel team at SAIC;
          since then I&rsquo;ve led UI engineering across enterprise modernizations, energy-sector design systems,
          and — lately — AI-first product work on Azure AI Foundry with Domain-Driven Design at the seams.
        </p>
        <p>
          I&rsquo;m best when there&rsquo;s a real person on the other side of the screen and a real engineering team behind it.
          I like the seams: what the data has to look like, what the API has to promise, what the interface ends up feeling like
          when you use it on a slow Wednesday. I write at that intersection.
        </p>
        <p>
          I taught with <strong>Girl Develop It Dayton</strong> from 2015 to 2018, which is where I found the
          confidence to speak my mind — and learned that people actually wanted to know what I thought.
          When I&rsquo;m not at a keyboard you&rsquo;ll find me with my daughter Rowyn or petting a cat named{' '}
          <strong style={{ color: 'var(--fg-strong)', fontWeight: 600 }}>Sunny</strong>,
          trying to grow something in a chunk of garden I&rsquo;m slowly losing to mint, or losing myself in a longer book than I have time for.
        </p>

        <h2 className="about__sub-h">A short timeline</h2>
        <ul className="about__role-list">
          <li>
            <span className="dot"></span>
            <span className="role">Lead Senior Software Engineer</span>
            <span className="org">· Applied Information Sciences</span>
            <span className="year">2016 — now</span>
          </li>
          <li>
            <span className="dot"></span>
            <span className="role">Senior Software Engineer</span>
            <span className="org">· Riverside Research</span>
            <span className="year">2013 — 2016</span>
          </li>
          <li>
            <span className="dot"></span>
            <span className="role">Software Engineer</span>
            <span className="org">· SAIC</span>
            <span className="year">2010 — 2013</span>
          </li>
          <li>
            <span className="dot"></span>
            <span className="role">Teacher</span>
            <span className="org">· Girl Develop It Dayton</span>
            <span className="year">2015 — 2018</span>
          </li>
        </ul>

        <div className="about__quote">
          <p>
            &ldquo;The hardest part of any system isn&rsquo;t the system. It&rsquo;s defining the system —
            and then getting everyone to agree on that definition.&rdquo;
          </p>
        </div>

        <div className="about__cta">
          <Button variant="primary" onClick={() => onNav('/work')} icon="arrow">See what I&rsquo;m working on</Button>
          <Button variant="secondary" onClick={() => onNav('/resume')}>Full resume</Button>
        </div>
      </div>
    </div>
  );
}

function Work({ onNav }) {
  const work = window.WORK;
  return (
    <div className="work" data-screen-label="03 Work">
      <header className="work__head band band--rose">
        <Eyebrow variant="rose">selected work</Eyebrow>
        <h1>Things I&rsquo;ve built lately.</h1>
        <p>
          A short, opinionated look at what I&rsquo;m leading or have recently shipped at AIS.
          The full timeline lives on the <a href="#/resume" onClick={(e) => { e.preventDefault(); onNav('/resume'); }}>resume page</a>.
        </p>
      </header>

      <div className="work__grid">
        {work.map((p) => (<WorkCard key={p.id} project={p} onOpen={() => onNav('/work')} />))}
      </div>

      <section className="work__publications band band--linen">
        <Eyebrow variant="slate">publications</Eyebrow>
        <h2>From a previous life.</h2>
        <ul className="publications">
          {window.PUBLICATIONS.map((p) => (
            <li key={p.title}>
              <a href={p.url} target="_blank" rel="noopener noreferrer">
                <span className="publications__title">{p.title}</span>
                <span className="publications__venue">{p.venue} <Icon name="external" size={12} /></span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Blog({ onNav }) {
  const POSTS_PER_PAGE = 4;
  const [page, setPage] = useStateS(1);
  const posts = window.POSTS;
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const paginated = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
  const rowTints = ['', '--sage', '--linen', '--rose'];

  return (
    <div data-screen-label="04 Blog">
      <header className="blog-page__head">
        <Eyebrow variant="rose">writing</Eyebrow>
        <h1>The blog.</h1>
        <p>
          Things I&rsquo;ve written down so I&rsquo;d remember them. Conference papers from a previous life,
          AIS posts from the cloud-and-Angular years, and — newly — some notes on building with AI agents
          when the agent is a teammate and not a feature.
        </p>
      </header>

      <div className="blog-list">
        {paginated.map((p, i) => (
          <PostCardRow
            key={p.title}
            post={p}
            tint={rowTints[i % rowTints.length]}
            onOpen={(u) => onNav(u.replace('#',''))}
          />
        ))}
      </div>

      <div className="pagination">
        <button className="pagination__btn" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
          ← Newer
        </button>
        <span className="pagination__page">page {page} of {totalPages}</span>
        <button className="pagination__btn" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
          Older →
        </button>
      </div>
    </div>
  );
}

function Resume({ onNav }) {
  const exp = window.EXPERIENCE;
  const earlier = window.EARLIER;
  const skills = window.SKILLS;
  const edu = window.EDUCATION;

  return (
    <div className="resume" data-screen-label="05 Resume">
      <header className="resume__head">
        <div>
          <Eyebrow variant="sage">resume</Eyebrow>
          <h1>K.C. Jones Evans</h1>
          <p className="resume__head__sub">Lead Senior Software Engineer · Frontend Architect · Applied Information Sciences</p>
          <p className="resume__head__meta">15+ years of experience · United States</p>
        </div>
        <div className="resume__head__actions">
          <Button
            variant="primary"
            icon="download"
            href="KC_Jones-Evans_May_2026.pdf"
            onClick={(e) => { e.preventDefault(); alert('In the deployed site this downloads the latest PDF.'); }}
          >
            Download PDF
          </Button>
          <Button variant="secondary" icon="external" href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
            LinkedIn
          </Button>
        </div>
      </header>

      <section className="resume__summary band band--rose">
        <Eyebrow variant="rose">summary</Eyebrow>
        <p>
          Lead Senior Software Engineer with 15+ years of experience, specializing in <strong>frontend architecture</strong>
          and scalable cloud solutions. Adept in <strong>Angular</strong> and accessibility-first UI design, alongside <strong>Azure</strong>
          solutions and DevOps CI/CD. Recent work centers on <strong>AI-assisted development</strong> and <strong>Domain-Driven Design</strong>
          {' '}for cloud-native applications. Known for cross-functional leadership, mentoring, and user-centered design.
        </p>
      </section>

      <Eyebrow>experience</Eyebrow>
      <div className="timeline">
        {exp.map((e) => (
          <div className="timeline-item" key={e.role + e.years}>
            <div className="timeline-item__years">{e.years} · {e.location}</div>
            <h3 className="timeline-item__role">{e.role}</h3>
            <div className="timeline-item__org">{e.org}</div>
            <ul className="timeline-item__bullets">
              {e.bullets.map((b, i) => <li key={i} dangerouslySetInnerHTML={{ __html: b }}></li>)}
            </ul>
          </div>
        ))}
      </div>

      <section className="resume__twocol">
        <div>
          <Eyebrow variant="rose">earlier</Eyebrow>
          <ul className="earlier">
            {earlier.map((e) => (
              <li key={e.role + e.years}>
                <span className="earlier__role">{e.role}</span>
                <span className="earlier__org">· {e.org}</span>
                <span className="earlier__year">{e.years}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Eyebrow variant="sage">education</Eyebrow>
          <div className="edu">
            <div className="edu__degree">{edu.degree}</div>
            <div className="edu__school">{edu.school}</div>
            <div className="edu__loc">{edu.location}</div>
          </div>
        </div>
      </section>

      <Eyebrow variant="rose">skills &amp; tools</Eyebrow>
      <div className="skills">
        {skills.map((s, i) => (
          <Tag key={s} variant={['rose','sage','linen'][i % 3]}>{s}</Tag>
        ))}
      </div>

      <Eyebrow variant="sage">certifications</Eyebrow>
      <ul className="certs">
        {(window.CERTIFICATIONS || []).map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <Eyebrow variant="slate">publications</Eyebrow>
      <ul className="publications publications--inline">
        {window.PUBLICATIONS.map((p) => (
          <li key={p.title}>
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              <span className="publications__title">{p.title}</span>
              <span className="publications__venue">{p.venue} <Icon name="external" size={12} /></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Contact({ onNav }) {
  return (
    <div className="contact contact--single" data-screen-label="06 Contact">
      <div className="contact__intro">
        <Eyebrow variant="rose">say hello</Eyebrow>
        <h1>Drop me a line.</h1>
        <p>
          Email is the fastest way — I read it within a day or two. For longer conversations or work questions,
          LinkedIn is fine too.
        </p>
        <div className="contact__channels">
          <a className="contact__channel" href="mailto:kcjonesevans@gmail.com">
            <div className="icon-link"><Icon name="mail" size={18} /></div>
            <div>
              <div className="contact__channel-label">email</div>
              <div className="contact__channel-value">kcjonesevans@gmail.com</div>
            </div>
          </a>
          <a className="contact__channel" href="https://github.com/kcjonesevans" target="_blank" rel="noopener noreferrer">
            <div className="icon-link"><Icon name="github" size={18} /></div>
            <div>
              <div className="contact__channel-label">github</div>
              <div className="contact__channel-value">@kcjonesevans</div>
            </div>
          </a>
          <a className="contact__channel" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <div className="icon-link"><Icon name="linkedin" size={18} /></div>
            <div>
              <div className="contact__channel-label">linkedin</div>
              <div className="contact__channel-value">K.C. Jones Evans</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Home, About, Work, Blog, Resume, Contact });

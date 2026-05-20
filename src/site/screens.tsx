import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import {
  CERTIFICATIONS,
  EARLIER,
  EDUCATION,
  EXPERIENCE,
  NOW,
  POSTS,
  PUBLICATIONS,
  SKILLS,
  WORK
} from './data';
import {
  ArrowLink,
  Button,
  Eyebrow,
  Icon,
  IconLink,
  PostCardCompact,
  PostCardRow,
  Sidebar,
  Tag,
  WorkCard
} from './ui';

type LayoutContext = {
  currentlyText: string;
};

export function HomeScreen() {
  const navigate = useNavigate();
  const { currentlyText } = useOutletContext<LayoutContext>();
  const recent = POSTS.slice(0, 4);
  const cardTints = ['', '--sage', '--rose', '--linen'];

  return (
    <div className="home" data-screen-label="01 Home">
      <Sidebar />
      <div className="home__hero">
        <Eyebrow variant="rose">hello there</Eyebrow>
        <h1>Hi, I am K.C.</h1>
        <p className="home__lede">
          I am a lead senior software engineer at <strong>Applied Information Sciences</strong>. Fifteen-plus years in, I architect systems,
          modernize design systems, and shepherd cross-functional teams through the noisy middle of a migration. Lately, a lot of AI agents
          and Domain-Driven Design.
        </p>
        <div className="home__currently">
          <span className="dot"></span>
          <span><strong>currently</strong> - {currentlyText}</span>
        </div>

        <div className="home__rail">
          <div className="home__rail-head">
            <h2 className="home__section-h">What I am on right now</h2>
            <ArrowLink href="#/work" onClick={() => navigate('/work')}>see all work</ArrowLink>
          </div>
          <div className="home__now-grid">
            {NOW.map((n) => (
              <article key={n.id} className={`home__now-card home__now-card--${n.tint}`}>
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
                  {n.stack.map((stack, index) => (
                    <Tag key={stack} variant={['rose', 'sage', 'linen'][index % 3]}>{stack}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="home__rail">
          <div className="home__rail-head">
            <h2 className="home__section-h">Recent writing</h2>
            <ArrowLink href="#/blog" onClick={() => navigate('/blog')}>all writing</ArrowLink>
          </div>
          <div className="home__posts">
            {recent.map((post, index) => (
              <PostCardCompact key={post.title} post={post} tint={cardTints[index % cardTints.length]} onOpen={(url) => navigate(url.replace('#', ''))} />
            ))}
          </div>
        </div>

        <div className="home__cta-row">
          <Button variant="primary" onClick={() => navigate('/contact')} icon="arrow">Drop me a line</Button>
          <Button variant="secondary" onClick={() => navigate('/resume')} icon="download">Resume</Button>
        </div>
      </div>
    </div>
  );
}

export function AboutScreen() {
  const navigate = useNavigate();

  return (
    <div className="about" data-screen-label="02 About">
      <div className="about__avatar-wrap">
        <img className="about__avatar" src="/assets/headshot.png" alt="K.C. Jones Evans" />
        <div className="about__avatar-name">K.C. Jones Evans</div>
        <div className="about__avatar-role">lead senior software engineer · AIS</div>
        <div className="sidebar__socials about__socials">
          <IconLink href="https://github.com/kcjonesevans" name="github" label="GitHub" size={18} />
          <IconLink href="https://www.linkedin.com/" name="linkedin" label="LinkedIn" size={18} />
          <IconLink href="mailto:kcjonesevans@proton.me" name="mail" label="Email" size={18} />
        </div>
      </div>
      <div className="about__body">
        <Eyebrow variant="sage">about</Eyebrow>
        <h1>I work on the web, the cloud, and the data underneath.</h1>
        <p>
          I am a lead senior software engineer at Applied Information Sciences, based in the United States. Over fifteen years ago I started
          writing software for a small geospatial-and-open-source-intel team at SAIC; since then I have led UI engineering across enterprise
          modernizations, energy-sector design systems, and lately AI-first product work on Azure AI Foundry with Domain-Driven Design at the seams.
        </p>
        <p>
          I am best when there is a real person on the other side of the screen and a real engineering team behind it. I like the seams: what
          the data has to look like, what the API has to promise, what the interface ends up feeling like when you use it on a slow Wednesday.
          I write at that intersection.
        </p>

        <h2 className="about__sub-h">A short timeline</h2>
        <ul className="about__role-list">
          <li><span className="dot"></span><span className="role">Lead Senior Software Engineer</span><span className="org">· Applied Information Sciences</span><span className="year">2016 - now</span></li>
          <li><span className="dot"></span><span className="role">Senior Software Engineer</span><span className="org">· Riverside Research</span><span className="year">2013 - 2016</span></li>
          <li><span className="dot"></span><span className="role">Software Engineer</span><span className="org">· SAIC</span><span className="year">2010 - 2013</span></li>
          <li><span className="dot"></span><span className="role">Teacher</span><span className="org">· Girl Develop It Dayton</span><span className="year">2015 - 2018</span></li>
        </ul>

        <div className="about__quote">
          <p>"The hardest part of any system is not the system. It is defining the system and then getting everyone to agree on that definition."</p>
        </div>

        <div className="about__cta">
          <Button variant="primary" onClick={() => navigate('/work')} icon="arrow">See what I am working on</Button>
          <Button variant="secondary" onClick={() => navigate('/resume')}>Full resume</Button>
        </div>
      </div>
    </div>
  );
}

export function WorkScreen() {
  return (
    <div className="work" data-screen-label="03 Work">
      <header className="work__head band band--rose">
        <Eyebrow variant="rose">selected work</Eyebrow>
        <h1>Things I have built lately.</h1>
        <p>A short, opinionated look at what I am leading or have recently shipped at AIS.</p>
      </header>

      <div className="work__grid">
        {WORK.map((project) => (
          <WorkCard key={project.id} project={project} />
        ))}
      </div>

      <section className="work__publications band band--linen">
        <Eyebrow variant="slate">publications</Eyebrow>
        <h2>From a previous life.</h2>
        <ul className="publications">
          {PUBLICATIONS.map((publication) => (
            <li key={publication.title}>
              <a href={publication.url} target="_blank" rel="noopener noreferrer">
                <span className="publications__title">{publication.title}</span>
                <span className="publications__venue">{publication.venue} <Icon name="external" size={12} /></span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export function BlogScreen() {
  const navigate = useNavigate();
  const postsPerPage = 4;
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(POSTS.length / postsPerPage));
  const paginated = POSTS.slice((page - 1) * postsPerPage, page * postsPerPage);
  const rowTints = ['', '--sage', '--linen', '--rose'];

  return (
    <div data-screen-label="04 Blog">
      <header className="blog-page__head">
        <Eyebrow variant="rose">writing</Eyebrow>
        <h1>The blog.</h1>
      </header>

      <div className="blog-list">
        {paginated.map((post, index) => (
          <PostCardRow key={post.title} post={post} tint={rowTints[index % rowTints.length]} onOpen={(url) => navigate(url.replace('#', ''))} />
        ))}
      </div>

      <div className="pagination">
        <button className="pagination__btn" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
          ← Newer
        </button>
        <span className="pagination__page">page {page} of {totalPages}</span>
        <button className="pagination__btn" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
          Older →
        </button>
      </div>
    </div>
  );
}

export function ResumeScreen() {
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
            href="/KC_Jones-Evans_CV_May_2026.docx"
            download="KC_Jones-Evans_CV_May_2026.docx"
          >
            Download Resume
          </Button>
          <Button variant="secondary" icon="external" href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
            LinkedIn
          </Button>
        </div>
      </header>

      <section className="resume__summary band band--rose">
        <Eyebrow variant="rose">summary</Eyebrow>
        <p>
          Lead Senior Software Engineer with 15+ years of experience, specializing in <strong>frontend architecture</strong> and scalable cloud solutions.
          Recent work centers on <strong>AI-assisted development</strong> and <strong>Domain-Driven Design</strong> for cloud-native applications.
        </p>
      </section>

      <Eyebrow>experience</Eyebrow>
      <div className="timeline">
        {EXPERIENCE.map((experience) => (
          <div className="timeline-item" key={`${experience.role}${experience.years}`}>
            <div className="timeline-item__years">{experience.years} · {experience.location}</div>
            <h3 className="timeline-item__role">{experience.role}</h3>
            <div className="timeline-item__org">{experience.org}</div>
            <ul className="timeline-item__bullets">
              {experience.bullets.map((bullet) => (
                <li key={bullet} dangerouslySetInnerHTML={{ __html: bullet }}></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="resume__twocol">
        <div>
          <Eyebrow variant="rose">earlier</Eyebrow>
          <ul className="earlier">
            {EARLIER.map((item) => (
              <li key={`${item.role}${item.years}`}>
                <span className="earlier__role">{item.role}</span>
                <span className="earlier__org">· {item.org}</span>
                <span className="earlier__year">{item.years}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Eyebrow variant="sage">education</Eyebrow>
          <div className="edu">
            <div className="edu__degree">{EDUCATION.degree}</div>
            <div className="edu__school">{EDUCATION.school}</div>
            <div className="edu__loc">{EDUCATION.location}</div>
          </div>
        </div>
      </section>

      <Eyebrow variant="rose">skills & tools</Eyebrow>
      <div className="skills">
        {SKILLS.map((skill, index) => (
          <Tag key={skill} variant={['rose', 'sage', 'linen'][index % 3]}>{skill}</Tag>
        ))}
      </div>

      <Eyebrow variant="sage">certifications</Eyebrow>
      <ul className="certs">
        {CERTIFICATIONS.map((certification) => (
          <li key={certification}>{certification}</li>
        ))}
      </ul>

      <Eyebrow variant="slate">publications</Eyebrow>
      <ul className="publications publications--inline">
        {PUBLICATIONS.map((publication) => (
          <li key={publication.title}>
            <a href={publication.url} target="_blank" rel="noopener noreferrer">
              <span className="publications__title">{publication.title}</span>
              <span className="publications__venue">{publication.venue} <Icon name="external" size={12} /></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ContactScreen() {
  return (
    <div className="contact contact--single" data-screen-label="06 Contact">
      <div className="contact__intro">
        <Eyebrow variant="rose">say hello</Eyebrow>
        <h1>Drop me a line.</h1>
        <p>Email is the fastest way - I read it within a day or two.</p>
        <div className="contact__channels">
          <a className="contact__channel" href="mailto:kcjonesevans@proton.me">
            <div className="icon-link"><Icon name="mail" size={18} /></div>
            <div>
              <div className="contact__channel-label">email</div>
              <div className="contact__channel-value">kcjonesevans@proton.me</div>
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

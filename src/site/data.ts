export type Post = {
  title: string;
  date: string;
  description: string;
  img: string;
  tags: string[];
  url: string;
  soon?: boolean;
  content: string;
};

export type WorkProject = {
  id: string;
  title: string;
  role: string;
  period: string;
  blurb: string;
  stack: string[];
  tint: 'rose' | 'sage' | 'linen';
};

export type NowItem = {
  id: string;
  role: string;
  period: string;
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  tint: 'rose' | 'sage' | 'linen';
};

export type ExperienceItem = {
  org: string;
  role: string;
  years: string;
  location: string;
  bullets: string[];
};

export const POSTS: Post[] = [
  {
    title: 'Modernizing an enterprise design system for a large energy company',
    date: '2026-02-14',
    description:
      'Notes on leading an Angular 14 -> Angular 20 upgrade of a long-lived design system, Storybook 9 documentation, and the reusable AI instruction sets that did most of the migration work alongside us.',
    img: '/assets/blog-mac.jpg',
    tags: ['Angular 20', 'Design Systems', 'Storybook', 'AI-Assisted Dev'],
    url: '#/blog/eud-system',
    soon: true,
    content: ''
  },
  {
    title: 'Domain-Driven Design with AI: EventStorming a chat-and-search platform',
    date: '2025-11-09',
    description:
      'What I learned scoping AI-generated code with Domain-Driven Design and EventStorming on Pathlink Hub - an ontology-driven chat, search, and community app on Angular, .NET, Terraform, and Azure.',
    img: '/assets/blog-software.jpg',
    tags: ['DDD', 'EventStorming', 'AI Agents', 'Azure'],
    url: '#/blog/ddd-ai-pathlink',
    soon: true,
    content: ''
  },
  {
    title: 'From Sticky Notes to Shippable Code',
    date: '2024-06-01',
    description:
      'How Domain-Driven Design workshops — from the first sticky note to the last pull request — can structure a clear path from collaborative domain discovery to working, deployed software.',
    img: '/assets/blog-workflow.jpg',
    tags: ['EventStorming', 'DDD', 'Software Delivery', 'Agile'],
    url: 'https://www.ais.com/from-sticky-notes-to-shippable-code/',
    content: ''
  },
  {
    title: 'Build and Deploy Angular Applications Using Azure DevOps Pipelines',
    date: '2022-05-24',
    description:
      'Automating the build and deployment of an Angular application in Azure DevOps is as easy as any other code hosting service. A walkthrough: caching, App Service deploys, and pushing containers to ACR.',
    img: 'angular-brand',
    tags: ['Angular', 'Azure', 'DevOps', 'Pipelines'],
    url: 'https://www.ais.com/build-and-deploy-angular-applications-using-azure-devops-pipelines/',
    content: ''
  },
  {
    title: 'Automating File Transfer from FTP to AWS S3 with Terraform',
    date: '2021-03-22',
    description:
      'The client had files on an FTP server and needed them in S3 where their analysis tools were already configured. Here is how I wired it up with Terraform, an EC2 jump-box, and a scheduled sync.',
    img: '/assets/blog-workflow.jpg',
    tags: ['AWS', 'Terraform', 'S3', 'FTP'],
    url: 'https://www.ais.com/automating-file-transfer-from-ftp-server-to-aws-s3-bucket-using-terraform/',
    content: ''
  },
  {
    title: 'Web-based Geospatial Information Extraction',
    date: '2012-08-01',
    description:
      'Conference paper from a previous life - a programmatic approach to collecting, analyzing, and categorizing multi-lingual open-source data with a geospatial focus. NAECON 2012.',
    img: '/assets/blog-how-to-start.jpg',
    tags: ['Geospatial', 'Information Retrieval', 'NAECON 2012'],
    url: 'https://ieeexplore.ieee.org/document/6531027',
    content: ''
  },
  {
    title: 'Language Translation of Web-based Content',
    date: '2012-08-01',
    description:
      'Conference paper on improving machine translation accuracy of web content from Cyrillic, Asian, and Arabic sources by handling ISO character mapping correctly. NAECON 2012.',
    img: '/assets/blog-coffee-shop.jpg',
    tags: ['Machine Translation', 'CLIR', 'ISO', 'NAECON 2012'],
    url: 'http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=6531026',
    content: ''
  }
];

export const WORK: WorkProject[] = [
  {
    id: 'databricks-sim',
    title: 'Databricks simulation integration',
    role: 'Senior Engineer',
    period: 'Apr 2026 - present',
    blurb:
      'Integrated a Databricks connection for simulations into an energy client\'s existing simulation management tool using .NET, Python, and Azure DevOps - enabling direct comparison of job reports between legacy and new simulation approaches.',
    stack: ['Databricks', '.NET', 'Python', 'Azure DevOps'],
    tint: 'sage'
  },
  {
    id: 'pathlink-hub',
    title: 'Pathlink Hub',
    role: 'Architect & Technical Lead',
    period: 'Jan 2026 - present',
    blurb:
      'Architected and led an ontology-driven chat, search, and community application built on Angular, .NET, Terraform, and Azure. Applied Domain-Driven Design EventStorming to define domains and bounded contexts, scoping AI-generated code for the application and its infrastructure.',
    stack: ['Angular', '.NET', 'Terraform', 'Azure', 'DDD', 'EventStorming'],
    tint: 'rose'
  },
  {
    id: 'energy-design-system',
    title: 'Enterprise design system - large energy company',
    role: 'Frontend Architect',
    period: 'Sep 2025 - Dec 2025',
    blurb:
      'Led the upgrade of a large energy company\'s design system from Angular 14 to Angular 20 with Storybook documentation, as primary developer on a team of three. Authored reusable AI instruction sets that assisted the upgrade and can be reapplied to future Angular releases and to applications migrating onto the design system.',
    stack: ['Angular 20', 'Storybook 9', 'AI-Assisted Dev', 'A11y'],
    tint: 'linen'
  },
  {
    id: 'low-code-claims',
    title: 'Low-code claims intake - First Notice of Loss',
    role: 'Lead Designer + Engineer',
    period: 'Jul 2025 - Aug 2025',
    blurb:
      'Brought in new technologies while leading development of a low-code claims intake solution using agent-based orchestration and AI-assisted workflows. Delivered modular components for data capture, extraction, and classification, integrated with Azure services to streamline insurance operations.',
    stack: ['Azure AI Foundry', 'AI Agents', 'Angular', 'TypeScript'],
    tint: 'sage'
  },
  {
    id: 'azure-ai-search',
    title: 'Azure AI Search application',
    role: 'Lead Engineer / Frontend Architect',
    period: 'Sep 2021 - Mar 2025',
    blurb:
      'Led architectural decision-making - technical solutions selection and framework implementation - for an Azure AI Search application with over 4 million records.',
    stack: ['Angular', 'Azure AI Search', '.NET', 'Cloud modernization'],
    tint: 'rose'
  },
  {
    id: 'cms-ai-classification',
    title: 'AI in a Django Wagtail CMS',
    role: 'Engineering Lead',
    period: '2024',
    blurb:
      'Spearheaded the integration of AI into a Django Wagtail CMS with VueJS, enhancing resource classification and metadata generation - improving search efficiency and reducing time spent importing resources.',
    stack: ['Django', 'Wagtail', 'VueJS', 'AI'],
    tint: 'linen'
  }
];

export const NOW: NowItem[] = [
  {
    id: 'now-pathlink',
    role: 'Architect & Technical Lead',
    period: 'Jan 2026 - present',
    title: 'An ontology-driven chat, search & community app',
    problem:
      'A platform that has to reason about a real domain - with AI-generated code in the mix - without turning into a pile of half-understood abstractions.',
    solution:
      'Applying Domain-Driven Design EventStorming to define domains and bounded contexts, then scoping AI-generated code against that map for both the application and its infrastructure.',
    stack: ['Angular', '.NET', 'Terraform', 'Azure'],
    tint: 'rose'
  },
  {
    id: 'now-design-system',
    role: 'Frontend Architect',
    period: 'Sep 2025 - Dec 2025',
    title: 'Modernizing an enterprise design system',
    problem:
      'A long-lived Angular 14 design system used by dozens of teams, with accessibility gaps and no clear path to a modern Angular release.',
    solution:
      'Upgraded to Angular 20 with Storybook documentation, working accessibility passes alongside the client\'s UX team - and authored reusable AI instruction sets so the next Angular jump is much shorter.',
    stack: ['Angular 20', 'Storybook 9', 'AI-Assisted Dev', 'A11y'],
    tint: 'linen'
  },
  {
    id: 'now-ai-agents',
    role: 'Lead Designer + Engineer',
    period: 'Jul 2025 - Aug 2025',
    title: 'Low-code claims intake with agent orchestration',
    problem:
      'When an LLM is part of the team, the UI has to make it obvious where the agent is helping, where it is deciding, and where the human is still on the hook.',
    solution:
      'Modular components for data capture, extraction, and classification, glued together with agent-based orchestration and AI-assisted workflows on top of Azure.',
    stack: ['Azure AI Foundry', 'AI Agents', 'Angular'],
    tint: 'sage'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    org: 'Applied Information Sciences (AIS)',
    role: 'Lead Senior Software Engineer',
    years: 'Mar 2016 - present',
    location: 'Full-time',
    bullets: [
      'Led multiple teams in UI/UX development and grew to lead pre-sales teams creating architectural designs centered around AI/ML.',
      'Architected and led Pathlink Hub, an ontology-driven chat, search, and community application built on Angular, .NET, Terraform, and Azure. Applied Domain-Driven Design EventStorming to define domains and bounded contexts, scoping AI-generated code for the application and its infrastructure.',
      'Integrated Databricks connection for simulations into an energy client\'s existing simulation management tool using .NET, Python, and Azure DevOps, enabling direct comparison of job reports between legacy and new simulation approaches.',
      'Led the upgrade of a large energy company\'s design system from Angular 14 to Angular 20 with Storybook documentation, as primary developer on a team of three. Authored reusable AI instruction sets that assisted the upgrade and can be reapplied to future Angular releases and to applications migrating onto the design system.'
    ]
  },
  {
    org: 'Riverside Research',
    role: 'Senior Software Engineer',
    years: 'Sep 2013 - Mar 2016',
    location: 'Dayton, OH',
    bullets: [
      'Developed interactive, data-driven web pages using jQuery, Python, and Perl, enhancing the user interface with modern UI tools and protocols.',
      'Enhanced web applications by updating to HTTPS and implementing jQuery plugins (datatables, jqplot) to improve data presentation and user interactivity.'
    ]
  },
  {
    org: 'SAIC',
    role: 'Software Engineer',
    years: 'Sep 2010 - Sep 2013',
    location: 'Dayton, OH',
    bullets: [
      'Developed the Geospatial Open Source Toolkit (GOST) for the Air Force Research Laboratory (AFRL) - multilingual web search, text capture and translation, and geospatial data analysis.',
      'Created SOAP and REST APIs in Python for data integration, with HTML, CSS, JavaScript, and AJAX for dynamic web-based user interfaces.'
    ]
  }
];

export const EARLIER = [
  { role: 'Chapter Leader / Instructor', org: 'Girl Develop It Dayton', years: 'Aug 2015 - Dec 2018' },
  { role: 'Operating Systems TA · Programming Assistant I', org: 'Wright State University', years: 'Apr 2009 - Oct 2010' },
  { role: 'Web Developer Intern', org: 'Reynolds & Reynolds', years: 'Jul 2009 - Aug 2009' }
];

export const SKILLS = [
  'Angular', 'TypeScript', 'JavaScript', '.NET', 'C#',
  'Node.js', 'Python', 'Django', 'Java Spring Boot',
  'Azure', 'Azure AI Foundry', 'Azure DevOps', 'AWS',
  'Terraform', 'Docker', 'Helm', 'Jenkins', 'GitLab CI', 'YAML Pipelines',
  'Storybook', 'HTML5', 'CSS3', 'jQuery', 'Adobe XD',
  'AI-Assisted Development', 'Domain-Driven Design', 'EventStorming',
  'REST APIs', 'Data Integration', 'Geospatial', 'Databricks',
  'Oracle DB', 'PL/SQL',
  'Automated Testing', 'JUnit', 'Cobertura', 'LCOV',
  'UI/UX', 'Accessibility', 'Code Reviews', 'Mentoring', 'Team Management'
];

export const CERTIFICATIONS = [
  'ES2015: The Shape of JavaScript to Come',
  'Real-Time Web with Node.js',
  'Shaping up with Angular.js'
];

export const PUBLICATIONS = [
  {
    title: 'Web-based Geospatial Information Extraction',
    venue: 'IEEE NAECON 2012',
    url: 'https://ieeexplore.ieee.org/document/6531027'
  },
  {
    title: 'Language Translation of Web-based Content',
    venue: 'IEEE NAECON 2012',
    url: 'http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=6531026'
  }
];

export const EDUCATION = {
  degree: 'B.S., Computer Science',
  school: 'Wright State University',
  location: 'Dayton, OH'
};

// filepath: src/app/routes.tsx
import { createHashRouter } from 'react-router-dom';
import SiteLayout from '../site/SiteLayout';
import {
  AboutScreen,
  BlogScreen,
  ContactScreen,
  HomeScreen,
  ResumeScreen,
  WorkScreen
} from '../site/screens';

export const router = createHashRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: 'about', element: <AboutScreen /> },
      { path: 'work', element: <WorkScreen /> },
      { path: 'blog', element: <BlogScreen /> },
      { path: 'resume', element: <ResumeScreen /> },
      { path: 'contact', element: <ContactScreen /> }
    ]
  }
]);

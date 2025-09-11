// filepath: src/app/routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Resume from '../pages/Resume/Resume';
import Blog from '../pages/Blog/Blog';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/resume', element: <Resume /> },
  { path: '/blog', element: <Blog /> }
]);

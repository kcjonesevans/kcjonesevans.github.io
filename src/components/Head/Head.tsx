// filepath: src/components/Head/Head.tsx
import { useEffect } from 'react';

type HeadProps = {
  title?: string;
  description?: string;
};

export default function Head({ 
  title = "K.C. Jones Evans",
  description = "Personal website of K.C. Jones Evans" 
}: HeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Add viewport meta tag if it doesn't exist
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1');
      document.head.appendChild(viewport);
    }
    
    // Add charset meta tag if it doesn't exist
    let charset = document.querySelector('meta[charset]');
    if (!charset) {
      charset = document.createElement('meta');
      charset.setAttribute('charset', 'utf-8');
      document.head.appendChild(charset);
    }
    
    // Add theme color meta tags
    const metaTags = [
      { name: 'theme-color', content: '#263959' },
      { name: 'msapplication-navbutton-color', content: '#263959' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#263959' }
    ];
    
    metaTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });
    
    // Add favicon and apple touch icons
    const linkTags = [
      { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-touch-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-touch-icon-144x144.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Serif:400,700|Lato:300,400,700&display=swap' },
      { rel: 'stylesheet', href: '/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/main.css' }
    ];
    
    linkTags.forEach(linkInfo => {
      let selector = `link[rel="${linkInfo.rel}"]`;
      if (linkInfo.sizes) {
        selector += `[sizes="${linkInfo.sizes}"]`;
      }
      if (linkInfo.href.includes('fonts.googleapis.com')) {
        selector += '[href*="fonts.googleapis.com"]';
      }
      
      let link = document.querySelector(selector);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', linkInfo.rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', linkInfo.href);
      if (linkInfo.sizes) {
        link.setAttribute('sizes', linkInfo.sizes);
      }
      if (linkInfo.type) {
        link.setAttribute('type', linkInfo.type);
      }
    });
    
  }, [title, description]);
  
  return null;
}

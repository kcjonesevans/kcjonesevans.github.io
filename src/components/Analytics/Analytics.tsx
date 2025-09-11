// filepath: src/components/Analytics/Analytics.tsx
import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.google-analytics.com/analytics.js';
    document.body.appendChild(script);
    // Optionally, you can add GA initialization here if needed
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return null;
}

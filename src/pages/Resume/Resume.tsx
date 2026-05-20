// filepath: src/pages/Resume/Resume.tsx
import PDFViewer from 'pdf-viewer-reactjs';
import MainLayout from '../../components/MainLayout/MainLayout';
// Import required CSS for pdf-viewer-reactjs
import 'bulma/css/bulma.min.css';
import 'bulma-helpers/css/bulma-helpers.min.css';
import 'material-design-icons/iconfont/material-icons.css';

export default function Resume() {
  return (
    <MainLayout>
      <section style={{ maxWidth: 900, margin: '2rem auto', background: '#fff', borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: '2rem' }}>
        <h2>Resume</h2>
        <PDFViewer
          document={{
            url: '/KC_Jones-Evans_September_2025.pdf',
          }}
          navbarOnTop
          hideRotation
          hideZoom
          scale={1.2}
        />
        <p style={{ marginTop: '1rem' }}>
          <a href="/KC_Jones-Evans_CV_May_2026.docx" download>Download Resume</a>
        </p>
      </section>
    </MainLayout>
  );
}

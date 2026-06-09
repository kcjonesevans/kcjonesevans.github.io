import MainLayout from '../../components/MainLayout/MainLayout';

export default function Resume() {
  return (
    <MainLayout>
      <section style={{ maxWidth: 900, margin: '2rem auto', background: '#fff', borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: '2rem' }}>
        <h2>Resume</h2>
        <p>
          Resume is provided as a downloadable document.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <a href="/KC_Jones-Evans_CV_May_2026.docx" download>Download Resume</a>
        </p>
        <p>
          <a href="/KC_Jones-Evans_CV_May_2026.docx" target="_blank" rel="noreferrer">Open Resume</a>
        </p>
      </section>
    </MainLayout>
  );
}

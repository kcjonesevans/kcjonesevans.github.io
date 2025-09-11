// filepath: src/pages/Resume/Resume.tsx
import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';

export default function Resume() {
  return (
    <MainLayout>
      <section style={{ maxWidth: 700, margin: '2rem auto', background: '#f7f9fc', borderRadius: '0.5rem', padding: '2rem' }}>
        <h2>Resume</h2>
        <h3>Experience</h3>
        <ul>
          <li><strong>Applied Information Sciences</strong><br />Solutions Advisor, Software Engineer, UX Engineer<br /><em>March 2016 - Present</em><br />Leading user experience engineering, developing and designing web applications with Angular, React/Redux and Node.</li>
          <li><strong>Riverside Research</strong><br />Software Developer<br /><em>September 2013 - February 2016</em><br />Developed interactive dynamic web pages using Jquery, Perl, and an Oracle DB. Researched development issues, provided multiple solutions and implemented a solution in a team. Maintained metrics and statics of an Oracle DB.</li>
          <li><strong>Science Applications International Corporation</strong><br />Software Engineer<br /><em>September 2010 - September 2013</em><br />Support Small Business Innovation Research (SBIR) program and other various programs needing software design and engineering. Leading and creating a Python/Django application that uses entity, temporal, and geospatial extraction of web based media.</li>
          <li><strong>Wright State University College of Engineering</strong><br />Programming Assistant and Teacher's Assistant<br /><em>April 2009 - October 2010</em><br />Teaching assistant for operating systems class covering file-system usage and design, process usage and control, virtual memory, multi user systems, access control. Provide assistance to Computer Science and Engineering students in Java & C/C++ introduction and intermediate level classes with debugging and solving issues with labs and projects.</li>
          <li><strong>Wright State University College of Math and Science</strong><br />Developmental Math 095 Proctor<br /><em>September 2008 - March 2010</em><br />Taught developmental algebra and pre-algebra concepts to college students.</li>
          <li><strong>The Reynolds and Reynolds Company</strong><br />Web Developer Intern<br /><em>Summer 2009</em><br />Internship as a Web Developer for Reynolds and Reynold's Marketing Department.</li>
        </ul>
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React and Redux</li>
          <li>Angular</li>
          <li>Node.js</li>
          <li>UX Engineering</li>
          <li>Cloud & Data</li>
        </ul>
      </section>
    </MainLayout>
  );
}

import React from 'react';

const Projects = () => {
  return (
    <section className="experience" id="projects">
      <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
      
      <div className="exp">
        
        {/* Bug Tracking System Project */}
        <div className="exp-card">
          <div className="exp-header">
            <div>
              <h2>Bug Tracking System</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.2rem' }}>Associated with K.R. Mangalam University</p>
            </div>
            <h4>Jan 2026 – Present</h4>
          </div>
          <p>A Bug Tracker System is a software application designed to help developers and teams identify, record, manage, and resolve defects (bugs) in software projects. It acts as a centralized platform where issues are logged, tracked through their lifecycle, and resolved efficiently, ensuring higher software quality and smoother collaboration.</p>
          <div className="skill-tags" style={{ marginTop: '1rem' }}>
            <span className="skill-badge">React.js</span>
            <span className="skill-badge">Node.js</span>
            <span className="skill-badge">Express.js</span>
            <span className="skill-badge">MySQL</span>
            <span className="skill-badge">Chart.js</span>
          </div>
          <div className="project-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://bug-tracker-system-mocha.vercel.app/" className="resume-btn" target="_blank" rel="noopener noreferrer">
              View Live
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            <a href="https://github.com/priyanshu00099/Bug-Tracker-System" className="resume-btn" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', border: '1px solid var(--primary)' }}>
              GitHub Repo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
          <div className="e-gallery" style={{ marginTop: '2rem' }}>
            <div className="gallery-item">
              <h3>Admin Role</h3>
              <img src="./File/BTS A.png" alt="Bug Tracking System Presentation" style={{ width: '100%', minHeight: '150px', background: 'rgba(255,255,255,0.05)', objectFit: 'cover' }} />
            </div>
            <div className="gallery-item">
              <h3>Landing Page</h3>
              <img src="./File/BTS.png" alt="Bug Tracking System Landing Page" style={{ width: '100%', minHeight: '150px', background: 'rgba(255,255,255,0.05)', objectFit: 'cover' }} />
            </div>
            <div className="gallery-item">
              <h3>Login Page</h3>
              <img src="./File/BTS L.png" alt="Bug Tracking System Login Page" style={{ width: '100%', minHeight: '150px', background: 'rgba(255,255,255,0.05)', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* Gold Sync Solutions Project */}
        <div className="exp-card">
          <div className="exp-header">
            <div>
              <h2>Gold Sync Solutions</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.2rem' }}>Associated with K.R. Mangalam University</p>
            </div>
            <h4>Mar 2025 – Apr 2025</h4>
          </div>
          <p>Successfully developed a centralized digital platform that integrates communication, inventory management, and order tracking. The platform bridges the gap between gold shop owners, vendors, and customers, ensuring seamless operations and significantly improving customer experiences.</p>
          <div className="skill-tags" style={{ marginTop: '1rem' }}>
            <span className="skill-badge">Node.js</span>
            <span className="skill-badge">React.js</span>
            <span className="skill-badge">MongoDB</span>
            <span className="skill-badge">Express.js</span>
            <span className="skill-badge">REST APIs</span>
            <span className="skill-badge">Authentication</span>
            <span className="skill-badge">JWT</span>
          </div>
          <div className="project-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://github.com/priyanshu00099/H" className="resume-btn" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', border: '1px solid var(--primary)' }}>
              GitHub Repo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
          <div className="e-gallery" style={{ marginTop: '2rem' }}>
            <div className="gallery-item">
              <h3>Project Screenshot</h3>
              <img src="./File/H.png" alt="Gold Sync Solutions Image" style={{ width: '100%', minHeight: '150px', background: 'rgba(255,255,255,0.05)', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;

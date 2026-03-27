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
          <div className="e-gallery" style={{ marginTop: '2rem' }}>
            <div className="gallery-item">
              <h3>Admin Role</h3>
              <img src="/File/BTS A.png" alt="Bug Tracking System Presentation" style={{ width: '100%', minHeight: '150px', background: 'rgba(255,255,255,0.05)', objectFit: 'cover' }} />
            </div>
            <div className="gallery-item">
              <h3>Landing Page</h3>
              <img src="/File/BTS.png" alt="Bug Tracking System Landing Page" style={{ width: '100%', minHeight: '150px', background: 'rgba(255,255,255,0.05)', objectFit: 'cover' }} />
            </div>
            <div className="gallery-item">
              <h3>Login Page</h3>
              <img src="/File/BTS L.png" alt="Bug Tracking System Login Page" style={{ width: '100%', minHeight: '150px', background: 'rgba(255,255,255,0.05)', objectFit: 'cover' }} />
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
          <div className="e-gallery" style={{ marginTop: '2rem' }}>
            <div className="gallery-item">
              <h3>Project Screenshot</h3>
              <img src="/File/H.png" alt="Gold Sync Solutions Image" style={{ width: '100%', minHeight: '150px', background: 'rgba(255,255,255,0.05)', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;

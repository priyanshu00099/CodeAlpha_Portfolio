import React from 'react';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">My <span className="gradient-text">Experience</span></h2>
      
      <div className="exp">
        
        {/* BookMyTourNow Experience */}
        <div className="exp-card">
          <div className="exp-header">
            <div>
              <h2>Web Intern SEO</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.2rem' }}>BookMyTourNow · Internship · On-site</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Gurugram, Haryana, India</p>
            </div>
            <h4>Jul 2025 – Sep 2025</h4>
          </div>
          <p>Worked as a Web Intern focusing on Search Engine Optimization (SEO) and Data Analysis to improve web visibility and user engagement.</p>
        </div>

        {/* CodeAlpha Experience */}
        <div className="exp-card">
          <div className="exp-header">
            <div>
              <h2>Frontend Developer</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.2rem' }}>CodeAlpha · Internship · Remote</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Lucknow, Uttar Pradesh, India</p>
            </div>
            <h4>Jun 2025 – Jul 2025</h4>
          </div>
          <p>Served as a Frontend Developer Intern, developing user interfaces and honing skills in HTML, Cascading Style Sheets (CSS), and other frontend technologies.</p>
          <div className="e-gallery">
            <div className="gallery-item">
              <h3>Offer Letter</h3>
              <img src="./File/CodeAlpha OfferLater.png" alt="Provide CodeAlpha Offer Letter" style={{ minHeight: '150px', background: 'rgba(255,255,255,0.05)' }} />
            </div>
            <div className="gallery-item">
              <h3>Letter of Recommendation</h3>
              <img src="./File/CodeAlpha LOR.png" alt="Provide CodeAlpha LOR" style={{ minHeight: '150px', background: 'rgba(255,255,255,0.05)' }} />
            </div>
            <div className="gallery-item">
              <h3>Completion Certificate</h3>
              <img src="./File/CodeAlpha Certificate.png" alt="Provide CodeAlpha Certificate" style={{ minHeight: '150px', background: 'rgba(255,255,255,0.05)' }} />
            </div>
          </div>
        </div>

        {/* Future Intern Experience */}
        <div className="exp-card">
          <div className="exp-header">
            <div>
              <h2>Future Intern</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.2rem' }}>FuturIntern · Internship</p>
            </div>
            <h4>May 2025 – Jun 2025</h4>
          </div>
          <p>Completed a Web Developer internship at FuturIntern, where I gained hands-on experience in building responsive websites and enhancing front-end functionalities using modern web technologies.</p>
          <div className="e-gallery">
            <div className="gallery-item">
              <h3>Offer Letter</h3>
              <img src="./File/Future Offer.png" alt="Future Intern Offer Letter" />
            </div>
            <div className="gallery-item">
              <h3>Completion Certificate</h3>
              <img src="./File/Future Complete.png" alt="Future Intern Completion Certificate" />
            </div>
          </div>
        </div>

        {/* Cognifyz Technology Experience */}
        <div className="exp-card">
          <div className="exp-header">
            <div>
              <h2>Cognifyz Technology</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.2rem' }}>Cognifyz Technologies · Internship</p>
            </div>
            <h4>May 2025 – Jun 2025</h4>
          </div>
          <p>Completed a Web Development internship at Cognifyz Technologies, where I enhanced my skills in front-end and back-end technologies by working on real-world projects. It was a valuable experience that strengthened my problem-solving and collaborative abilities.</p>
          <div className="e-gallery">
            <div className="gallery-item">
              <h3>Offer Letter</h3>
              <img src="./File/Cognifyz Offer.png" alt="Cognifyz Technology Offer Letter" />
            </div>
            <div className="gallery-item">
              <h3>Completion Certificate</h3>
              <img src="./File/Cognifyz Complete.png" alt="Cognifyz Technology Completion Certificate" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;

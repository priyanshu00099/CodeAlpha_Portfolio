import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
      <p>I’m a passionate Full-Stack Developer with expertise in building data-driven web applications using the React and Node.js ecosystem. Proven track record in developing complex systems, such as a custom Bug Tracking platform, featuring interactive data visualizations with Chart.js and robust MySQL database architectures. Committed to clean code practices, proficient in Git version control, and dedicated to producing high-quality technical documentation to streamline collaborative development.</p>

      <div className="about-grid">
        <div className="img-a">
          <img src="./Img/pp.png" alt="About image of Priyanshu Raj Singh" />
        </div>

        <div className="a-content glass-panel" style={{ padding: '2.5rem' }}>
          <h1 className="gradient-text">Priyanshu Raj Singh</h1>
          <div className="about-details">
            <div className="detail-item">
              <span>Birthday</span>
              <p>7th July, 2004</p>
            </div>
            <div className="detail-item">
              <span>Education</span>
              <p>B-Tech 3rd year</p>
            </div>
            <div className="detail-item">
              <span>University</span>
              <p>KR Mangalam University, Gurgaon</p>
            </div>
            <div className="detail-item">
              <span>School</span>
              <p>GGPS, Bokaro Sec-5</p>
            </div>
            <div className="detail-item">
              <span>Birthplace</span>
              <p>Bokaro Steel City, Jharkhand</p>
            </div>
            <div className="detail-item">
              <span>Hobbies</span>
              <p>Cricket, Volleyball, Gaming</p>
            </div>
          </div>
          <div className="resume" style={{ marginTop: '1.5rem' }}>
            <a href="./File/Priyanshu Raj Singh - Resume.pdf" className="resume-btn" download="Priyanshu_Raj_Singh_Resume.pdf" aria-label="Download resume">
              Download Resume
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

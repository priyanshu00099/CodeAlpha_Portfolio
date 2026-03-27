import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
      
      <div className="skills-container">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <div className="skill-tags">
            <span className="skill-badge">Java</span>
            <span className="skill-badge">JavaScript (ES6+)</span>
            <span className="skill-badge">HTML5</span>
            <span className="skill-badge">CSS3</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Frontend & Digital Strategy</h3>
          <div className="skill-tags">
            <span className="skill-badge">React.js</span>
            <span className="skill-badge">Vite.js</span>
            <span className="skill-badge">Web Content Writing</span>
            <span className="skill-badge">Search Engine Optimization (SEO)</span>
            <span className="skill-badge">Mobile-First Design</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Backend & Cloud Database</h3>
          <div className="skill-tags">
            <span className="skill-badge">Node.js</span>
            <span className="skill-badge">Express.js</span>
            <span className="skill-badge">AWS</span>
            <span className="skill-badge">MySQL</span>
            <span className="skill-badge">MongoDB</span>
            <span className="skill-badge">RESTful APIs</span>
            <span className="skill-badge">Authentication & RBAC</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Tools & Soft Skills</h3>
          <div className="skill-tags">
            <span className="skill-badge">Git, GitHub, GitLab</span>
            <span className="skill-badge">Strong Problem-solving</span>
            <span className="skill-badge">Teamwork & Collaboration</span>
            <span className="skill-badge">Diligence</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

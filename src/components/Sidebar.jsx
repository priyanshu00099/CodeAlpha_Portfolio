import React from 'react';

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <button 
        className="hamburger" 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
      <div className="box-s">
        {/* Toggle 'hidden' class based on state */}
        <div className={`menu ${!isMenuOpen ? 'hidden' : 'active'}`} role="navigation" aria-label="Main menu">
          <div className="img">
            <img className="profile-pic" src="./Img/p.png.png" alt="Profile picture of Priyanshu Raj Singh" />
          </div>
          <h2>Priyanshu Raj Singh</h2>
          <div className="h">
            <a href="https://www.instagram.com/" aria-label="Instagram"><img src="./Icon/instagram.png" alt="Instagram" /></a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn"><img src="./Icon/linkedin.png" alt="LinkedIn" /></a>
            <a href="https://www.facebook.com/" aria-label="Facebook"><img src="./Icon/facebook.png" alt="Facebook" /></a>
            <a href="https://www.twitter.com/" aria-label="Twitter"><img src="./Icon/twitter.png" alt="Twitter" /></a>
          </div>
          <div className="nav" id="nav">
            <a href="#home" onClick={() => setIsMenuOpen(false)}><img src="./Icon/home.png" alt="Home" /> Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> About
            </a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line></svg> Skills
            </a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> Projects
            </a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> Experience
            </a>
            <a href="#contacts" onClick={() => setIsMenuOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

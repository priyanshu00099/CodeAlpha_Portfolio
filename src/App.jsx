import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="container">
        <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="box-b">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          {/* Footer was originally inside contacts section but it's better here. I will modify the CSS if needed or just leave it inside Contacts. Wait, original markup had footer inside contacts section! I will place Footer here for cleaner structure but give it equivalent styling if needed. The original index.html had footer inside `section.contacts` div. */}
        </div>
      </div>
    </>
  );
}

export default App;

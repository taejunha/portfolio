import { useEffect, useRef } from 'react';
import { Contact, Hero, Intro, Projects, Navbar, Travels } from "./components";
import Starfield from './components/Starfield';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <Router>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <div id="hero" className='z-10'>
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="intro" className="pd-2">
            <Intro />
          </div>
          <div id="portfolio" className='relative z-30 bg-primary mt-[-2px]'>
            <Projects />
          </div>
          <div id="travels" className='relative z-30 bg-primary mt-[-2px]'>
            <Travels />
          </div>
          <div id="contact" className='relative z-30 bg-primary'>
            <Contact />
          </div>
        </div>
      </div>
      <Starfield
          zIndex={-1}
          starCount={800}
          starColor={[255,255,255]}
          speedFactor={0.013}
          backgroundColor="black"
        />
    </Router>
  );
};

export default App;
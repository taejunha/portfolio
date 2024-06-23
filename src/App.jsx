import { useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Contact, First, Intro, Projects } from "./components";

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='wrapper' ref={wrapperRef}>
          <div id="hero" className='z-10'>
            <First scrollContainer={wrapperRef} />
          </div>
          <div id="introduction" className='relative z-30 bg-primary'>
            <Intro />
          </div>
          <div id="projects" className='relative z-30 bg-primary mt-[-2px]'>
            <Projects />
          </div>
          <div id="contact" className='relative z-30 bg-primary'>
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
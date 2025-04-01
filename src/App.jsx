import React, { useEffect, useRef, useState, useCallback } from 'react';
import './style.scss';
import Header from './Navigation/Header';
import Home from './Component/Home';
import About from './Component/About';
import Skill from './Component/Skill';
import Project from './Component/Project';
import Contact from './Component/Contact';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section) => {
    let ref;
    switch (section) {
      case 'home': ref = homeRef; break;
      case 'about': ref = aboutRef; break;
      case 'skill': ref = skillRef; break;
      case 'project': ref = projectRef; break;
      case 'contact': ref = contactRef; break;
      default: return;
    }
    
    window.scrollTo({
      top: ref.current?.offsetTop || 0,
      behavior: 'smooth',
    });
    console.log(ref.current.offsetTop);

    // console.log(section);
  };

  const handleScroll = useCallback(() => {
    // useCallback remove the unnecessary re-function call or anything
    const sections = [
      { name: 'home', ref: homeRef },
      { name: 'about', ref: aboutRef },
      { name: 'skill', ref: skillRef },
      { name: 'project', ref: projectRef },
      { name: 'contact', ref: contactRef },
    ];

    let currentSection = 'home';

    sections.forEach(({ name, ref }) => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect(); // This method help you to get the size and position of an element relative to the viewport(device screen size)
        /* 
          4312(Entire Page) / 5(Pages) => 862.4 
        
          Home => 0px to 862px
          About => 862px to 1725px
          Skill => 1725px to 2586px
          Project => 2586px to 3450px
          Contact => 3450px to 4312px
        
        */
        if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
          // True work until any of this condition return false: 0 <= 862px && 862px >= 431px(862/2)
          // False work: 400px <= 862px && 422px >= 431px(False). So, this block will not work.
          // Freshly calculate: top: 422px and bottom: 1284px
          // Calculate of bottom = top(422px) + element height(862px) = 1284px
          // top will go in negative(-40px) and bottom = -40px + 862px = 822px
          console.log("Height: ",window.innerHeight);
          currentSection = name;
          console.log("Top: ",top,"Bottom: ", bottom);
        }
      }
    });

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  console.log(handleScroll);

  return (
    <>
      <Header scrollToSection={scrollToSection} activeSection={activeSection} />
      <section ref={homeRef}> 
        <Home scrollToSection={scrollToSection}/> 
      </section>
      <section ref={aboutRef}> 
        <About scrollToSection={scrollToSection}/>
      </section>
      <section ref={skillRef}> <Skill /> </section>
      <section ref={projectRef}> <Project /> </section>
      <section ref={contactRef}> <Contact /> </section>
    </>
  );
};

export default App;
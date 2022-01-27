import React, {useState, useEffect} from 'react';

import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Animation from '../components/Animation/Animation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect (()=> {
    document.addEventListener('scroll', () => {
      
      setScrollY(window.scrollY)
  },[''])
  
  });
  return (
    <Layout>
      <Section grid> 
        <Hero />
        <BgAnimation />
      </Section>
      <Projects scrollY={scrollY}/>
      <Technologies scrollY={scrollY}/>
      <Timeline scrollY={scrollY}/>
     
    </Layout>
  );
};

export default Home;

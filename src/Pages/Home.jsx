import React from 'react'
import Hero from '../Components/Hero';
import About from '../Components/About';
import ClientsTalk from '../Components/Clients';
import Cover from '../Components/cover';
import HeroSection2 from '../Components/heroSection2';
import Awards from '../Components/Awards';

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <ClientsTalk />
        <Cover />
        <HeroSection2 />
        <Awards />
    </div>
  )
}

export default Home
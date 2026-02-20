import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

/**
 * Home Page Component
 * Main landing page with all sections
 */
const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;

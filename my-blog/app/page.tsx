import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import More from '../components/More';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <More />
      <Footer/>
    </div>
  );
};

export default Home;

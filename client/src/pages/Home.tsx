import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Waitlist from '@/components/Waitlist';
import Experience from '@/components/Experience';
import Publications from '@/components/Publications';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
  useEffect(() => {
    document.title = "Rakshinda Jabeen | English Teacher (CELTA Certified)";
  }, []);

  return (
    <div className="font-sans text-[#25092e] bg-white">
      <Header />
      <Hero />
      <Waitlist />
      <Experience />
      <Publications />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Publications from '@/components/Publications';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import CeltaCertification from '@/components/CeltaCertification';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Home = () => {
  useEffect(() => {
    document.title = "Rakshinda Jabeen | English Teacher (CELTA Certified)";
  }, []);

  return (
    <div className="font-sans text-[#25092e] bg-white">
      <Header />
      <Hero />
      <Experience />
      <div id="education-section" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-30 z-0"></div>
        <h2 className="font-soria text-4xl lg:text-5xl text-[#A3886b] text-center mb-10 pt-20 relative z-10">
          Education & Professional Development
        </h2>
        <CeltaCertification />
        <Education />
      </div>
      <Testimonials />
      <Publications />
      <Skills />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Home;

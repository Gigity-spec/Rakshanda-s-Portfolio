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
      <div id="education-section">
        <h2 className="font-soria text-3xl lg:text-4xl text-[#A3886b] text-center mb-6 pt-16">
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

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const testimonials = [
  {
    id: 1,
    quote: "Rakhshinda is an exceptional educator with a remarkable ability to engage students and create an inclusive learning environment. Her innovative teaching methods and deep subject knowledge make her an invaluable asset to any educational institution.",
    author: "Dr. Najmus Sarifa",
    role: "Assistant Professor of English, King Khalid University"
  },
  {
    id: 2,
    quote: "Working with Rakhshinda was a pleasure. Her dedication to excellence in teaching and her commitment to student success are exemplary. She consistently demonstrated outstanding classroom management and curriculum development skills.",
    author: "Prof. Ahmed Al-Qahtani",
    role: "Former Department Head, King Khalid University"
  },
  {
    id: 3,
    quote: "Ms. Jabeen was the most influential teacher in my academic journey. Her passion for English literature and language inspired me to pursue further studies in linguistics. Her teaching methods were engaging and effective, fostering critical thinking and creative expression.",
    author: "Sara Mahmoud",
    role: "Former Student, King Khalid University"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Animation for the cards
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    reset: true,
    config: { tension: 300, friction: 20 }
  });

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="font-soria text-3xl lg:text-5xl text-[#A3886b] text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white p-8 md:p-12 rounded-xl shadow-xl gradient-border" style={{ minHeight: '300px' }}>
            <div className="absolute top-0 left-0 transform -translate-y-8 -translate-x-4">
              <svg className="w-16 h-16 text-[#f2c0DD] opacity-30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <animated.div style={props} className="relative z-10">
              <p className="text-lg md:text-2xl italic text-[#25092e] mb-10 mt-6 leading-relaxed">"{activeTestimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#f2c0DD] to-[#A3886b] flex items-center justify-center text-white font-bold text-2xl shadow-md">
                  {activeTestimonial.author.charAt(0)}
                </div>
                <div className="ml-6">
                  <p className="font-semibold text-[#A3886b] text-xl">{activeTestimonial.author}</p>
                  <p className="text-md text-[#25092e] opacity-80">{activeTestimonial.role}</p>
                </div>
              </div>
            </animated.div>
          </div>
          
          <div className="flex justify-center mt-12 space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-[#A3886b]' : 'bg-[#f2c0DD] opacity-40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-[#f2c0DD] bg-opacity-20 hover:bg-opacity-40 transition-colors duration-300 shadow-md"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#A3886b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[#f2c0DD] bg-opacity-20 hover:bg-opacity-40 transition-colors duration-300 shadow-md"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#A3886b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
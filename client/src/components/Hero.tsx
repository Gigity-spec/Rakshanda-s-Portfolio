import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

// 3D Book Component
const Book3D = () => {
  // Motion values for 3D effect
  const rotateY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const bookRef = useRef<HTMLDivElement>(null);
  
  // Transform values for 3D shadows and perspective
  const shadowBlur = useTransform(rotateY, [-20, 0, 20], [8, 16, 8]);
  const shadowOpacity = useTransform(rotateY, [-20, 0, 20], [0.3, 0.2, 0.3]);
  
  useEffect(() => {
    // Animate the book slightly to show the 3D effect
    const animateBook = async () => {
      await animate(rotateY, 10, { duration: 1.5, ease: "easeInOut" });
      await animate(rotateY, -10, { duration: 1.5, ease: "easeInOut" });
      await animate(rotateY, 0, { duration: 1, ease: "easeInOut" });
    };
    
    animateBook();
    
    // Mouse move effect for interactive 3D rotation
    const handleMouseMove = (e: MouseEvent) => {
      if (!bookRef.current) return;
      
      const rect = bookRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate rotation based on mouse position
      const rotX = ((e.clientY - centerY) / (rect.height / 2)) * -8;
      const rotY = ((e.clientX - centerX) / (rect.width / 2)) * 8;
      
      rotateX.set(rotX);
      rotateY.set(rotY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [rotateX, rotateY]);
  
  return (
    <motion.div 
      ref={bookRef}
      className="w-full h-[400px] relative perspective-800 flex items-center justify-center"
      style={{
        perspective: "800px"
      }}
    >
      {/* Book spine */}
      <motion.div
        className="absolute w-[40px] h-[350px] bg-gradient-to-r from-[#A3886b] to-[#8a725d] rounded-l-sm transform origin-right"
        style={{
          rotateY: useTransform(rotateY, value => value - 90),
          rotateX,
          zIndex: 1,
          transformStyle: "preserve-3d",
          boxShadow: useTransform(
            shadowBlur,
            blur => `0px 0px ${blur}px rgba(0, 0, 0, 0.5)`
          )
        }}
      />
      
      {/* Book cover */}
      <motion.div
        className="w-[250px] h-[350px] bg-gradient-to-r from-[#f2c0DD] to-[#e5b3d1] rounded-r-sm p-6 flex flex-col justify-center items-center relative overflow-hidden"
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)"
        }}
      >
        {/* Book pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        
        {/* Book title */}
        <h3 className="text-[#25092e] text-2xl font-bold mb-2 text-center z-10 transform rotate-0">RAKSHINDA</h3>
        <h3 className="text-[#25092e] text-2xl font-bold mb-8 text-center z-10 transform rotate-0">JABEEN</h3>
        
        {/* Book subtitle */}
        <div className="text-[#25092e] text-sm font-medium mb-4 text-center z-10">
          <p className="mb-1">CELTA Certified</p>
          <p>English Teacher</p>
        </div>
        
        {/* Book decoration */}
        <div className="w-16 h-1 bg-[#A3886b] mb-4"></div>
        
        {/* Year */}
        <p className="text-[#25092e] opacity-70 text-sm">2000 - 2023</p>
      </motion.div>
      
      {/* Book pages */}
      <motion.div
        className="absolute w-[245px] h-[345px] bg-white rounded-r-sm transform origin-left"
        style={{
          rotateY: useTransform(rotateY, value => value + 3),
          rotateX,
          left: "40px",
          zIndex: 0,
          transformStyle: "preserve-3d"
        }}
      />
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 lg:pt-32 lg:pb-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-soria text-5xl lg:text-6xl text-[#A3886b] mb-4">Rakshinda Jabeen</h1>
            <h2 className="text-xl lg:text-2xl text-[#25092e] mb-6">English Teacher (CELTA Certified)</h2>
            <p className="text-lg text-[#25092e] opacity-90 mb-8">
              Over 20+ years of experience in English language instruction and academia. 
              Specializing in EFL teaching, curriculum design, and literature studies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-[#A3886b] hover:bg-opacity-90 text-white font-semibold rounded-lg px-6 py-3 text-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Contact Me
              </a>
              <a 
                href="#publications" 
                className="bg-[#f2c0DD] hover:bg-opacity-90 text-[#25092e] font-semibold rounded-lg px-6 py-3 text-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                View Publications
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative z-10">
              <Book3D />
            </div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-[#f2c0DD] rounded-full z-0 opacity-30"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#A3886b] rounded-full z-0 opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

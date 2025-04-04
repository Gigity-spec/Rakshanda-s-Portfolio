import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 lg:pt-32 lg:pb-20 section-gradient">
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
                href="#waitlist" 
                className="bg-[#f2c0DD] hover:bg-opacity-90 text-[#25092e] font-semibold rounded-lg px-6 py-3 text-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Join Waitlist
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl hover-grow hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80" 
                alt="Professional education setting" 
                className="w-full h-auto object-cover" 
              />
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

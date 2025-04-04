import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';

const CeltaCertification = () => {
  // Spring animation for 3D effect on certificate card
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  // Calculate the transform based on mouse position
  const calc = (x: number, y: number) => {
    const rect = document.getElementById('cert-card')?.getBoundingClientRect();
    if (!rect) return [0, 0, 1];
    return [
      -(y - rect.y - rect.height / 2) / 20,
      (x - rect.x - rect.width / 2) / 20,
      1.05
    ];
  }
  
  const trans = (x: number, y: number, s: number) => 
    `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <section id="celta" className="py-16 lg:py-20 celta-section">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="font-soria text-3xl lg:text-4xl text-[#A3886b] text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading" 
          aria-level={1}
        >
          CELTA Certification
        </motion.h1>
        
        <motion.h2 
          className="text-xl text-[#25092e] text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          role="heading"
          aria-level={2}
        >
          Cambridge CELTA - Certificate in English Language Teaching to Adults
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-[#25092e] mb-6">
              The Cambridge CELTA certification represents the gold standard in English language teaching qualifications. This internationally recognized credential demonstrates my expertise in teaching methodologies, classroom management, and student assessment techniques for adult learners.
            </p>
            
            <p className="text-[#25092e] mb-8">
              With this certification, I bring professional-level teaching practices to every classroom, ensuring effective language acquisition for students at all proficiency levels.
            </p>
            
            <animated.div 
              id="cert-card"
              className="bg-white rounded-xl shadow-lg overflow-hidden p-6 gradient-border"
              style={{ 
                transform: props.xys.to(trans),
                transition: 'box-shadow 0.5s',
                boxShadow: props.xys.to((x, y, s) => `0px ${5 + Math.abs(y) * 2}px ${10 + Math.abs(x) * 2}px rgba(0, 0, 0, 0.1)`)
              }}
              onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
            >
              <div className="text-center">
                <i className="fas fa-certificate text-4xl text-[#f2c0DD] mb-4"></i>
                <h3 className="text-[#A3886b] text-xl font-semibold mb-2">CELTA Certification</h3>
                <p className="text-[#25092e] opacity-80 mb-4">Cambridge University</p>
                <p className="text-[#25092e] text-sm opacity-70 mb-6">Certificate in Teaching English to Speakers of Other Languages</p>
                
                <a 
                  href="/documents/celta-certificate.pdf" 
                  target="_blank"
                  rel="noreferrer"
                  download="Rakhshinda-Jabeen-CELTA-Certificate.pdf"
                  className="inline-flex items-center bg-[#2176FF] text-white py-3 px-4 rounded-md shadow-md hover:bg-opacity-90 transition-all duration-200 w-[250px] justify-center"
                  aria-label="Download CELTA Certificate PDF"
                >
                  <i className="fas fa-file-pdf mr-2"></i>
                  <span>Download Certificate</span>
                </a>
              </div>
            </animated.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#f8f7f9] rounded-xl p-6 h-full">
              <h3 className="text-[#A3886b] text-xl font-semibold mb-6">Key Qualifications</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#f2c0DD] bg-opacity-20 rounded-full p-2 mr-3 mt-1">
                    <i className="fas fa-chalkboard-teacher text-[#f2c0DD]"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#25092e]">Teaching Methodologies</h4>
                    <p className="text-[#25092e] opacity-80 text-sm">Expert knowledge of communicative language teaching and student-centered approaches.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-[#f2c0DD] bg-opacity-20 rounded-full p-2 mr-3 mt-1">
                    <i className="fas fa-tasks text-[#f2c0DD]"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#25092e]">Lesson Planning</h4>
                    <p className="text-[#25092e] opacity-80 text-sm">Comprehensive skills in creating effective, engaging lesson plans for various language proficiency levels.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-[#f2c0DD] bg-opacity-20 rounded-full p-2 mr-3 mt-1">
                    <i className="fas fa-users text-[#f2c0DD]"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#25092e]">Classroom Management</h4>
                    <p className="text-[#25092e] opacity-80 text-sm">Advanced techniques for creating positive, productive learning environments.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-[#f2c0DD] bg-opacity-20 rounded-full p-2 mr-3 mt-1">
                    <i className="fas fa-clipboard-check text-[#f2c0DD]"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#25092e]">Student Assessment</h4>
                    <p className="text-[#25092e] opacity-80 text-sm">Thorough understanding of formative and summative assessment strategies.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-[#f2c0DD] bg-opacity-20 rounded-full p-2 mr-3 mt-1">
                    <i className="fas fa-globe text-[#f2c0DD]"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#25092e]">International Recognition</h4>
                    <p className="text-[#25092e] opacity-80 text-sm">Globally respected qualification accepted by institutions worldwide.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CeltaCertification;
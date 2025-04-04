import { motion } from 'framer-motion';
// Import logos directly using relative paths
import punjabLogo from '../assets/Punjab_University_Logo.png';
import nccLogo from '../assets/NCC_Logo.png';
import cambridgeLogo from '../assets/Cambridge_University_Logo.png';
import kkuLogo from '../assets/King_Khalid_University_Logo.png';

const educationItems = [
  {
    title: "Masters in English Literature",
    year: "The University of Punjab, Pakistan (2000)",
    description: "With optional paper of ELT (English Language Teaching)",
    logo: "/images/Punjab_University_Logo.png",
    alt: "University of Punjab Logo"
  },
  {
    title: "Bachelors in Arts and Humanities",
    year: "The University of Punjab, Pakistan (1997)",
    description: "Foundation in humanities and liberal arts education.",
    logo: "/images/Punjab_University_Logo.png",
    alt: "University of Punjab Logo"
  },
  {
    title: "National Cadet Core Training",
    year: "1995",
    description: "Leadership and discipline training program.",
    logo: nccLogo,
    alt: "National Cadet Corps Logo"
  }
];

const professionalDevelopmentItems = [
  {
    title: "Cambridge Professional Learning and Development",
    year: "February 16, 2020",
    description: "Training session on Academic Writing and Oracy in Abha",
    type: "workshop",
    logo: cambridgeLogo,
    alt: "Cambridge University Logo"
  },
  {
    title: "Making English Language Literacy Accessible for students",
    year: "November 30, 2019",
    description: "Training session by Dr. Eli Ghazele in Abha",
    type: "workshop",
    logo: kkuLogo,
    alt: "King Khalid University Logo"
  },
  {
    title: "E-Learning Practitioner Course",
    year: "2019",
    description: "Two-week online course by King Khalid University, Saudi Arabia",
    type: "online",
    logo: kkuLogo,
    alt: "King Khalid University Logo"
  },
  {
    title: "Unlock by Cambridge: Foundation Courses",
    year: "January 13, 2019",
    description: "Professional training conducted by Claire Hattle at King Khalid University, Abha",
    type: "training",
    logo: cambridgeLogo,
    alt: "Cambridge University Logo"
  },
  {
    title: "Digital Experience 2022",
    year: "February 23, 2022",
    description: "Cambridge Assessment English webinar on transforming teaching using Cambridge One and Blackboard",
    type: "webinar",
    logo: cambridgeLogo,
    alt: "Cambridge University Logo"
  },
  {
    title: "Blackboard Courses",
    year: "2019-2022",
    description: "Online courses in Illuminate Live, Blackboard testing, and Blackboard ultra",
    type: "online",
    logo: kkuLogo,
    alt: "King Khalid University Logo"
  }
];

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section id="education" className="py-10 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl lg:text-4xl text-[#A3886b] text-center mb-16 font-soria"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Academic Qualifications
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden gradient-border hover-grow academic-card"
              variants={itemVariants}
            >
              <div className="h-52 flex items-center justify-center bg-white relative">
                <img 
                  src={item.logo} 
                  alt={item.alt} 
                  className="w-40 h-40 object-contain education-logo"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    if (!img.src.includes('/images/')) {
                      img.src = `/images/${img.src.split('/').pop()}`;
                    }
                  }}
                />
              </div>
              <div className="p-8">
                <h3 className="font-semibold text-xl text-[#A3886b] mb-3">{item.title}</h3>
                <p className="text-md text-[#25092e] opacity-70 mb-4">{item.year}</p>
                <p className="text-[#25092e] opacity-80 text-md">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.h3 
          className="text-2xl text-[#A3886b] text-center mb-12 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Development & Training
        </motion.h3>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {professionalDevelopmentItems.map((item, index) => (
            <motion.div 
              key={`prof-${index}`}
              className="bg-white rounded-xl shadow-md overflow-hidden gradient-border hover-grow"
              variants={itemVariants}
            >
              <div className="p-4">
                <div className="flex flex-col items-center mb-3">
                  <div className="w-16 h-16 mb-3">
                    <img src={item.logo} alt={item.alt} className="w-full h-full object-contain" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg text-[#A3886b] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#25092e] opacity-70 mb-2">{item.year}</p>
                    <p className="text-[#25092e] opacity-80 text-sm">{item.description}</p>
                    <div className="mt-2 bg-[#f2c0DD] bg-opacity-20 rounded-full px-3 py-1 inline-block">
                      {item.type === "workshop" && <span className="text-xs text-[#A3886b]">Workshop</span>}
                      {item.type === "online" && <span className="text-xs text-[#A3886b]">Online Course</span>}
                      {item.type === "webinar" && <span className="text-xs text-[#A3886b]">Webinar</span>}
                      {item.type === "training" && <span className="text-xs text-[#A3886b]">Training</span>}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

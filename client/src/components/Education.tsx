import { motion } from 'framer-motion';

const educationItems = [
  {
    title: "CELTA Certification",
    year: "2025",
    description: "Professional teaching certificate for English language instruction.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Masters in English Literature",
    year: "The University of Punjab, Pakistan (2000)",
    description: "With optional paper of ELT (English Language Teaching)",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Bachelors in Arts and Humanities",
    year: "The University of Punjab, Pakistan (1997)",
    description: "Foundation in humanities and liberal arts education.",
    imageUrl: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "National Cadet Core Training",
    year: "1995",
    description: "Leadership and discipline training program.",
    imageUrl: "https://images.unsplash.com/photo-1594098404468-c39111286d95?auto=format&fit=crop&w=800&q=80"
  }
];

const professionalDevelopmentItems = [
  {
    title: "Cambridge Professional Learning and Development",
    year: "February 16, 2020",
    description: "Training session on Academic Writing and Oracy in Abha",
    type: "workshop"
  },
  {
    title: "Making English Language Literacy Accessible for students",
    year: "November 30, 2019",
    description: "Training session by Dr. Eli Ghazele in Abha",
    type: "workshop"
  },
  {
    title: "E-Learning Practitioner Course",
    year: "2019",
    description: "Two-week online course by King Khalid University, Saudi Arabia",
    type: "online"
  },
  {
    title: "Unlock by Cambridge: Foundation Courses",
    year: "January 13, 2019",
    description: "Professional training conducted by Claire Hattle at King Khalid University, Abha",
    type: "training"
  },
  {
    title: "Digital Experience 2022",
    year: "February 23, 2022",
    description: "Cambridge Assessment English webinar on transforming teaching using Cambridge One and Blackboard",
    type: "webinar"
  },
  {
    title: "Blackboard Courses",
    year: "2019-2022",
    description: "Online courses in Illuminate Live, Blackboard testing, and Blackboard ultra",
    type: "online"
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
    <section id="education" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="font-soria text-3xl lg:text-4xl text-[#A3886b] text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education & Professional Development
        </motion.h2>
        
        <motion.h3 
          className="text-xl text-[#25092e] text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Academic Qualifications
        </motion.h3>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden gradient-border hover-grow"
              variants={itemVariants}
            >
              <div className="h-40 bg-gradient-to-r from-[#f2c0DD] to-[#A3886b] opacity-20 flex items-center justify-center">
                <img 
                  src={item.imageUrl} 
                  alt="University campus" 
                  className="w-full h-full object-cover mix-blend-overlay" 
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-[#A3886b] mb-2">{item.title}</h3>
                <p className="text-sm text-[#25092e] opacity-70 mb-3">{item.year}</p>
                <p className="text-[#25092e] opacity-80 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.h3 
          className="text-xl text-[#25092e] text-center mb-10"
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
              <div className="p-6">
                <div className="flex items-start mb-3">
                  <div className="bg-[#f2c0DD] bg-opacity-20 rounded-full p-2 mr-3 mt-1">
                    {item.type === "workshop" && <i className="fas fa-users-class text-[#f2c0DD]"></i>}
                    {item.type === "online" && <i className="fas fa-laptop text-[#f2c0DD]"></i>}
                    {item.type === "webinar" && <i className="fas fa-video text-[#f2c0DD]"></i>}
                    {item.type === "training" && <i className="fas fa-graduation-cap text-[#f2c0DD]"></i>}
                    {!["workshop", "online", "webinar", "training"].includes(item.type) && <i className="fas fa-certificate text-[#f2c0DD]"></i>}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#A3886b] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#25092e] opacity-70 mb-2">{item.year}</p>
                    <p className="text-[#25092e] opacity-80 text-sm">{item.description}</p>
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

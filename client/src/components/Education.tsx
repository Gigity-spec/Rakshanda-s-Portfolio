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
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="font-soria text-3xl lg:text-4xl text-[#A3886b] text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education & Certifications
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
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
      </div>
    </section>
  );
};

export default Education;

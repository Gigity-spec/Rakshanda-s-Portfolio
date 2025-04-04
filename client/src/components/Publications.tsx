import { motion } from 'framer-motion';

const publicationItems = [
  {
    title: "Nature in the Hands of Wordsworth",
    journal: "International Journal of Linguistics, Literature and Translation (IJLLT)",
    description: "An exploration of Wordsworth's portrayal of nature and its significance in his works.",
    url: "http://www.ijllt.org/wp-content/uploads/2018/11/12-NEW.pdf"
  },
  {
    title: "Humor – an Effective Teaching Tool",
    journal: "Language in India",
    description: "Research on using humor as an effective tool in language learning environments.",
    url: "http://www.languageinindia.com/june2019/sufiahumoreffectiveteachingtoolefllearningfinal1.pdf"
  },
  {
    title: "Multicultural Diverse Classroom",
    journal: "Arab World English Journal",
    description: "Addressing instructional challenges and reflections from a teacher's perspective.",
    url: "https://dx.doi.org/10.24093/awej/efl1.10"
  }
];

const presentationItems = [
  {
    title: "P.B Shelley's Romanticism",
    event: "4th International European Conference on Interdisciplinary Scientific Research",
    location: "Warsaw, Poland (August 8-9, 2021)",
    icon: "fas fa-chalkboard-teacher"
  },
  {
    title: "Literature in EFL Classroom",
    event: "13th Research Day, King Khalid University",
    location: "Abha, Saudi Arabia (April 4, 2018)",
    icon: "fas fa-chalkboard-teacher"
  },
  {
    title: "Motivation in English Language Teaching",
    event: "KSAALT-TESOL Abha Chapter",
    location: "Presented research on motivational techniques for English language learners",
    icon: "fas fa-chalkboard-teacher"
  }
];

const Publications = () => {
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
    <section id="publications" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="font-soria text-3xl lg:text-4xl text-[#A3886b] text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Publications & Presentations
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Publications */}
          {publicationItems.map((item, index) => (
            <motion.div 
              key={`pub-${index}`}
              className="bg-white rounded-xl shadow-md overflow-hidden gradient-border hover-grow"
              variants={itemVariants}
            >
              <div className="p-6">
                <h3 className="font-semibold text-lg text-[#A3886b] mb-2">{item.title}</h3>
                <p className="text-sm text-[#25092e] opacity-70 mb-3">{item.journal}</p>
                <p className="text-[#25092e] opacity-80 text-sm mb-4">{item.description}</p>
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[#f2c0DD] hover:text-[#A3886b] transition-colors duration-300 text-sm flex items-center"
                >
                  <span>Read Publication</span>
                  <i className="fas fa-external-link-alt ml-1"></i>
                </a>
              </div>
            </motion.div>
          ))}
          
          {/* Presentations */}
          {presentationItems.map((item, index) => (
            <motion.div 
              key={`pres-${index}`}
              className="bg-white rounded-xl shadow-md overflow-hidden gradient-border hover-grow"
              variants={itemVariants}
            >
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-[#f2c0DD] bg-opacity-20 rounded-full p-2 mr-3">
                    <i className={`${item.icon} text-[#f2c0DD]`}></i>
                  </div>
                  <h3 className="font-semibold text-lg text-[#A3886b]">{item.title}</h3>
                </div>
                <p className="text-sm text-[#25092e] opacity-70 mb-2">{item.event}</p>
                <p className="text-[#25092e] opacity-80 text-sm">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;

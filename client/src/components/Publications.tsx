import { motion } from 'framer-motion';

const publicationItems = [
  {
    title: "Probing the Approaches to Teaching Literature to EFL Students - Graduate Learners' Perspective",
    journal: "Journal of Arts and Humanities, Vol. 11(01), October 2023",
    description: "Co-authored with Najmus Sarifa (King Khalid University). Research on effective literature teaching approaches for graduate EFL students.",
    url: "https://www.researchgate.net/publication/374581704_Probing_the_Approaches_to_Teaching_Literature_to_EFL_Students_-Graduate_Learners'_Perspective",
    doi: "10.18533/jah.v11i02.2236",
    featured: true
  },
  {
    title: "Nature in the Hands of Wordsworth",
    journal: "International Journal of Linguistics, Literature and Translation (IJLLT)",
    description: "An exploration of Wordsworth's portrayal of nature and its significance in his works.",
    url: "http://www.ijllt.org/wp-content/uploads/2018/11/12-NEW.pdf"
  },
  {
    title: "Humor – an Effective Teaching Tool in Language Learning",
    journal: "Language in India",
    description: "Research on using humor as an effective tool in language learning environments.",
    url: "http://www.languageinindia.com/june2019/sufiahumoreffectiveteachingtoolefllearningfinal1.pdf"
  },
  {
    title: "Multicultural Diverse Classroom: Addressing the Instructional Challenges and Reflections",
    journal: "Arab World English Journal",
    description: "Special Issue: The Dynamics of EFL in Saudi Arabia. Research from a teacher's perspective.",
    url: "https://dx.doi.org/10.24093/awej/efl1.10"
  },
  {
    title: "Infringing Behaviors of Students inside a University Classroom",
    journal: "Educatio",
    description: "A research study from the teachers' vantage point analyzing classroom behavior issues.",
    url: "https://doi.org/10.29138/educatio.v5i2.288"
  },
  {
    title: "Challenges and Predicaments in Teaching 'English for Science' in an ESP Classroom",
    journal: "International Journal of English Language Teaching",
    description: "A research study to pinpoint problems and solutions in ESP teaching contexts.",
    url: "https://doi.org/10.37745/ijelt.13/vol12n18089"
  },
  {
    title: "Conceptualizing Creativity: Leading to an Efficacious EFL Teaching",
    journal: "International Journal of Education, Learning and Development",
    description: "Research on creativity as a vital component of effective EFL teaching methodology.",
    url: "https://doi.org/10.37745/ijeld.2013/vol12n84157"
  }
];

const bookPublications = [
  {
    title: "P.B Shelley's Romanticism: A World of Sheer Ecstasy",
    publication: "Book Proceedings: 4th International European Conference on Interdisciplinary Scientific Research",
    description: "Warsaw, Poland, held on 8-9 August 2021",
    url: "#"
  },
  {
    title: "Challenges Faced by an EFL Instructor inside a University Classroom-An observational study",
    publication: "Book Proceedings: 1st International Congress of Innovation through Academic Writing",
    description: "Kırıkkale University, Turkey, IKSAD Publications. ISBN: 978-625-8254-06-8(83-86)",
    url: "#"
  }
];

const presentationItems = [
  {
    title: "Analyzing the Efficacy of Teaching Approaches for EFL Students",
    event: "Language Research Center (LRC) Webinar, King Khalid University",
    location: "Abha, Saudi Arabia (March 2022)",
    icon: "fas fa-chalkboard-teacher"
  },
  {
    title: "P.B Shelley's Romanticism: A World of Sheer Ecstasy",
    event: "4th International European Conference on Interdisciplinary Scientific Research",
    location: "Warsaw, Poland (August 8-9, 2021)",
    icon: "fas fa-chalkboard-teacher"
  },
  {
    title: "Conceptualizing Creativity, an Efficacious tool in EFL Teaching",
    event: "Second International Virtual TESOL Conference",
    location: "Theme: 'Second Language Acquisition Research Advances'",
    icon: "fas fa-chalkboard-teacher"
  },
  {
    title: "Motivation in English Language Teaching",
    event: "KSAALT-TESOL Abha Chapter",
    location: "Research on motivational techniques for English language learners",
    icon: "fas fa-chalkboard-teacher"
  },
  {
    title: "Literature in EFL Classroom - An Analytical Study",
    event: "13th Research Day, King Khalid University",
    location: "Abha, Saudi Arabia (April 4, 2018)",
    icon: "fas fa-chalkboard-teacher"
  },
  {
    title: "Infringing Behaviors of Students in an EFL Classroom",
    event: "Language Research Center, King Khalid University",
    location: "Abha, Saudi Arabia (2021)",
    icon: "fas fa-chalkboard-teacher"
  },
  {
    title: "Challenges Faced by an Instructor inside a University Classroom",
    event: "First International Congress of Innovation Through Academic Writing",
    location: "Kirikkale University, Turkey (2022)",
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
          className="font-soria text-3xl lg:text-4xl text-[#A3886b] text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Publications & Presentations
        </motion.h2>
        
        <motion.h3 
          className="text-xl text-[#25092e] text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Featured Publication
        </motion.h3>
        
        {/* Featured Publication */}
        {publicationItems.filter(item => item.featured).map((item, index) => (
          <motion.div 
            key={`featured-${index}`}
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#f2c0DD] p-6">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="bg-[#f2c0DD] bg-opacity-20 rounded-full p-6 w-32 h-32 flex items-center justify-center">
                    <i className="fas fa-star text-4xl text-[#f2c0DD]"></i>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <div className="flex items-center mb-3">
                    <h3 className="font-semibold text-xl text-[#A3886b]">{item.title}</h3>
                    <span className="ml-3 px-2 py-1 bg-[#f2c0DD] bg-opacity-20 text-[#A3886b] text-xs rounded-full">Featured</span>
                  </div>
                  <p className="text-[#25092e] opacity-80 mb-2">{item.journal}</p>
                  <p className="text-[#25092e] opacity-80 mb-2 text-sm"><strong>DOI:</strong> {item.doi}</p>
                  <p className="text-[#25092e] opacity-80 mb-4">{item.description}</p>
                  <div className="flex items-center space-x-4">
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center bg-[#2176FF] text-white py-2 px-4 rounded-md shadow-sm hover:bg-opacity-90 transition-all duration-200"
                      aria-label={`Read the publication: ${item.title}`}
                    >
                      <i className="fas fa-book-open mr-2"></i>
                      <span>Read Publication</span>
                    </a>
                    <a 
                      href={`https://doi.org/${item.doi}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center text-[#25092e] hover:text-[#A3886b] transition-colors duration-300"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i>
                      <span>DOI Link</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        <motion.h3 
          className="text-xl text-[#25092e] text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Journal Publications
        </motion.h3>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Journal Publications (excluding featured) */}
          {publicationItems.filter(item => !item.featured).map((item, index) => (
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
        </motion.div>
        
        <motion.h3 
          className="text-xl text-[#25092e] text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Book Proceedings
        </motion.h3>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Book Publications */}
          {bookPublications.map((item, index) => (
            <motion.div 
              key={`book-${index}`}
              className="bg-white rounded-xl shadow-md overflow-hidden gradient-border hover-grow"
              variants={itemVariants}
            >
              <div className="p-6">
                <div className="flex items-start mb-3">
                  <div className="bg-[#f2c0DD] bg-opacity-20 rounded-full p-2 mr-3 mt-1">
                    <i className="fas fa-book text-[#f2c0DD]"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#A3886b] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#25092e] opacity-70 mb-2">{item.publication}</p>
                    <p className="text-[#25092e] opacity-80 text-sm">{item.description}</p>
                  </div>
                </div>
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
          Academic Presentations
        </motion.h3>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
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

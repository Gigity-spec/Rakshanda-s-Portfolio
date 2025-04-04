import { motion } from 'framer-motion';

const experienceItems = [
  {
    institution: "King Khalid University",
    period: "2007 - 2023",
    position: "Lecturer in English",
    location: "College of Languages and Translation, Abha, Saudi Arabia",
    responsibilities: [
      "Teaching EFL to Arab students of different levels, including Blended Teaching",
      "Organizing, planning, and teaching a variety of age groups and classes",
      "Creating original content through planning, scripting, and production",
      "Teaching students how to analyze literature and composition",
      "Using Blackboard for interactive online learning resources"
    ]
  },
  {
    institution: "Fatima Jinnah Degree College",
    period: "2000 - 2007",
    position: "English Lecturer, Head of Department",
    location: "Faisalabad, Pakistan",
    responsibilities: [
      "Taught ESL to college students of various levels",
      "Taught literature and language to graduate students",
      "Developed exam questions and provided efficient assessment",
      "Involved in mentoring students for academic achievements",
      "Worked as Head of Department assisting with administrative affairs"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 lg:py-20 section-gradient">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="font-soria text-3xl lg:text-4xl text-[#A3886b] text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          {experienceItems.map((item, index) => (
            <motion.div 
              key={index}
              className={`${index !== experienceItems.length - 1 ? 'mb-12' : ''} relative hover-grow`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <div className="bg-white rounded-lg p-5 shadow-md gradient-border h-full">
                    <h3 className="font-bold text-xl text-[#A3886b]">{item.institution}</h3>
                    <p className="text-[#25092e] opacity-80">{item.period}</p>
                    <p className="mt-2 text-[#25092e]">{item.position}</p>
                    <p className="mt-2 text-sm text-[#25092e] opacity-70">{item.location}</p>
                  </div>
                </div>
                
                <div className="md:w-2/3 md:pl-8">
                  <h4 className="font-semibold text-lg text-[#25092e] mb-3">Duties and Responsibilities</h4>
                  <ul className="space-y-2 text-[#25092e] opacity-80">
                    {item.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#f2c0DD] mr-2">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

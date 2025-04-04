import { motion } from 'framer-motion';
import ScrollAnimation from './3d-scroll-animation';

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
      "Preparing exams, exercises, and providing assessment with relevant feedback",
      "Using Blackboard for interactive online learning resources and assessment",
      "Conducting SPSS result analysis and reporting to department",
      "Establishing supportive learning environments and creating rewards to encourage students",
      "Teaching specialized English classes to students in science, economics, business administration",
      "Participating in continuing education programs and professional development",
      "Assisting program coordinators in ensuring goals are fulfilled",
      "Compiling mandatory course reports for Quality Unit at semester end"
    ]
  },
  {
    institution: "Fatima Jinnah Degree College for Women",
    period: "2000 - 2007",
    position: "English Lecturer, Head of Department",
    location: "Faisalabad, Pakistan",
    responsibilities: [
      "Taught ESL to college students of various levels",
      "Taught literature and language to graduate students",
      "Developed exam questions for mid-semester and final exams",
      "Provided efficient assessment and timely feedback on student performance",
      "Mentored students for academic achievements and extra-curricular activities",
      "Incorporated available technology into course format and assignments",
      "Organized and participated in cultural and social activities",
      "Served as Head of Department, assisting principal with staff affairs",
      "Managed administrative duties including leave applications and exam control"
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
            <ScrollAnimation 
              key={index}
              className={`${index !== experienceItems.length - 1 ? 'mb-12' : ''} relative hover-grow`}
              direction={index % 2 === 0 ? 'right' : 'left'}
              rotation
              scale
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <div className="bg-white rounded-lg p-5 shadow-md gradient-border h-full">
                    <h3 className="font-bold text-xl text-[#A3886b]">{item.institution}</h3>
                    <p className="text-[#25092e] opacity-80">{item.period}</p>
                    <p className="mt-2 text-[#25092e]">{item.position}</p>
                    <p className="mt-2 text-sm text-[#25092e] opacity-70 mb-4">{item.location}</p>
                    
                    {item.institution === "King Khalid University" && (
                      <a 
                        href="/documents/king-khalid-experience.pdf" 
                        target="_blank"
                        rel="noreferrer"
                        download="Rakhshinda-Jabeen-KKU-Experience.pdf"
                        className="inline-flex items-center text-[#2176FF] hover:text-[#A3886b] transition-colors duration-300 text-sm"
                        aria-label="Download King Khalid University Experience Certificate"
                      >
                        <i className="fas fa-file-pdf mr-1"></i>
                        <span>Download Experience Certificate</span>
                      </a>
                    )}
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
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

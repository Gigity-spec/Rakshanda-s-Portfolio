import { motion } from 'framer-motion';
import ScrollAnimation from './3d-scroll-animation';

const skillCategories = [
  {
    title: "Core Teaching Skills",
    icon: "fas fa-chalkboard-teacher",
    skills: [
      { name: "EFL/ESL Instruction", level: "Expert", percentage: 95 },
      { name: "Teaching Methodology", level: "Expert", percentage: 92 },
      { name: "Classroom Management", level: "Expert", percentage: 95 },
      { name: "Lesson Planning", level: "Expert", percentage: 90 },
      { name: "Curriculum Design", level: "Expert", percentage: 95 },
      { name: "Literature Analysis", level: "Expert", percentage: 94 }
    ]
  },
  {
    title: "Language Skills",
    icon: "fas fa-language",
    skills: [
      { name: "English", level: "Advanced", percentage: 95 },
      { name: "Urdu", level: "Native", percentage: 100 },
      { name: "Arabic", level: "Intermediate", percentage: 65 }
    ]
  },
  {
    title: "Technical Skills",
    icon: "fas fa-laptop-code",
    skills: [
      { name: "SPSS (Data Analysis)", level: "Proficient", percentage: 85 },
      { name: "MS Office Suite", level: "Proficient", percentage: 90 },
      { name: "Blackboard LMS", level: "Proficient", percentage: 88 },
      { name: "Google Workspace", level: "Proficient", percentage: 85 },
      { name: "PowerPoint", level: "Proficient", percentage: 92 }
    ]
  },
  {
    title: "Soft Skills",
    icon: "fas fa-users",
    skills: [
      { name: "Communication", level: "Expert", percentage: 95 },
      { name: "Organization", level: "Expert", percentage: 90 },
      { name: "Creativity", level: "Expert", percentage: 92 },
      { name: "Collaboration", level: "Expert", percentage: 90 },
      { name: "Positive Attitude", level: "Expert", percentage: 95 },
      { name: "Adaptability", level: "Expert", percentage: 88 }
    ]
  },
  {
    title: "Research Skills",
    icon: "fas fa-search",
    skills: [
      { name: "Academic Writing", level: "Expert", percentage: 90 },
      { name: "Research Methodology", level: "Advanced", percentage: 85 },
      { name: "Literature Review", level: "Advanced", percentage: 88 },
      { name: "Data Analysis", level: "Proficient", percentage: 82 }
    ]
  },
  {
    title: "Professional Development",
    icon: "fas fa-certificate",
    skills: [
      { name: "CELTA Certification", level: "Certified", percentage: 100 },
      { name: "Workshop Facilitation", level: "Advanced", percentage: 88 },
      { name: "Mentoring", level: "Advanced", percentage: 85 },
      { name: "Continuous Learning", level: "Expert", percentage: 95 }
    ]
  }
];

const Skills = () => {
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
    <section id="skills" className="py-16 lg:py-20 section-gradient">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="font-soria text-3xl lg:text-4xl text-[#A3886b] text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <ScrollAnimation 
              key={categoryIndex}
              className="relative h-full"
              direction={categoryIndex % 2 === 0 ? 'up' : 'down'}
              rotation={categoryIndex % 3 === 0}
              scale
              threshold={0.1}
            >
              <div 
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 gradient-border hover-grow h-full flex flex-col relative"
              >
                <h3 className="font-semibold text-lg text-[#8B5E3C] mb-2 flex items-center">
                  <div className="w-8 h-8 bg-[#E6A4C4] bg-opacity-30 rounded-lg flex items-center justify-center mr-3">
                    <i className={`${category.icon} text-[#E6A4C4] text-lg`}></i>
                  </div>
                  {category.title}
                </h3>

                <div className="space-y-2 flex-grow mt-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gray-50 rounded-lg p-2">
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-semibold text-[#25092e]">{skill.name}</span>
                        <span className="text-xs font-medium text-[#E6A4C4] bg-[#E6A4C4] bg-opacity-10 px-2 py-0.5 rounded-full">{skill.level}</span>
                      </div>
                      <div className="w-full h-1.5 flex items-center gap-1">
                        {[...Array(10)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-full h-2 rounded-full bg-gray-200"
                            initial={{ scale: 0.95, opacity: 0.3 }}
                            whileInView={{
                              scale: i < (skill.percentage / 10) ? 1 : 0.95,
                              opacity: i < (skill.percentage / 10) ? 1 : 0.3,
                              backgroundColor: i < (skill.percentage / 10) ? '#E6A4C4' : '#e5e7eb'
                            }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.4, 
                              delay: i * 0.05,
                              type: "spring",
                              stiffness: 300
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
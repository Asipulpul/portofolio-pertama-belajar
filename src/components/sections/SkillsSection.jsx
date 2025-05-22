import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Cloud, Palette, Settings } from 'lucide-react';

const skillsData = [
  { name: "HTML5", icon: Code, level: 90, category: "Frontend" },
  { name: "CSS3 & Tailwind", icon: Palette, level: 75, category: "Frontend" },
  { name: "JavaScript (ES6+)", icon: Code, level: 80, category: "Frontend" },
  { name: "React & Next.js", icon: Code, level: 70, category: "Frontend" },
  { name: "Node.js & Express", icon: Server, level: 80, category: "Backend" },
  { name: "Python & Django", icon: Server, level: 70, category: "Backend" },
  { name: "MongoDB & PostgreSQL", icon: Database, level: 70, category: "Databases" },
  { name: "Git & GitHub", icon: Settings, level: 80, category: "Tools" },
  { name: "Docker", icon: Cloud, level: 50, category: "Tools" },
  { name: "AWS/GCP", icon: Cloud, level: 65, category: "Cloud" },
  { name: "UI/UX Design Principles", icon: Palette, level: 90, category: "Design" },
  { name: "Agile Methodologies", icon: Settings, level: 85, category: "Methodologies" },
];

const categoryColors = {
  Frontend: "bg-blue-500",
  Backend: "bg-green-500",
  Databases: "bg-yellow-500",
  Tools: "bg-purple-500",
  Cloud: "bg-sky-500",
  Design: "bg-pink-500",
  Methodologies: "bg-indigo-500",
};

const SkillsSection = () => {
  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  };

  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              variants={skillVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="group"
            >
              <div className="p-4 bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 flex flex-col items-center text-center h-full">
                <skill.icon className="h-10 w-10 text-primary mb-3 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-md font-semibold text-foreground mb-2">{skill.name}</h3>
                <div className="w-full bg-muted rounded-full h-2.5 mb-1 overflow-hidden">
                  <motion.div
                    className={`h-2.5 rounded-full ${categoryColors[skill.category] || 'bg-primary'}`}
                    style={{ width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">{skill.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
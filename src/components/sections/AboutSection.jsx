import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Award, Users } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Briefcase, value: "3+", label: "Years Experience" },
    { icon: Award, value: "10+", label: "Projects Completed" },
    { icon: Users, value: "5+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img  
              className="rounded-lg shadow-xl w-full h-auto max-h-[400px] object-cover" 
              alt="A person working on a laptop in a modern workspace"
             src="https://images.unsplash.com/photo-1650278795309-26295c74cf2b" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-card shadow-lg border-none">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">My Journey in Tech</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Hello! I'm Asipul Bahri, a dedicated and results-oriented Full-Stack Developer with a passion for crafting elegant and efficient solutions. My journey into web development started with a fascination for how websites could connect people and ideas across the globe.
                </p>
                <p>
                  Over the past few years, I've honed my skills in front-end technologies like React and Next.js, as well as back-end frameworks such as Node.js and Express. I thrive on tackling complex challenges and continuously learning new technologies to stay at the forefront of innovation.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new hiking trails, experimenting with new recipes, or contributing to open-source projects.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          className="grid sm:grid-cols-3 gap-8 mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
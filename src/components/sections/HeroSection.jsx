import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.2"/></pattern></defs><rect width="100%" height="100%" fill="url(#smallGrid)" /></svg>
      </div>
      <div className="container mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img  
            className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 border-4 border-primary shadow-xl object-cover" 
            alt="Profile photo of [Asipul Bahri]"
           src="https://media-cgk2-1.cdn.whatsapp.net/v/t61.24694-24/484402553_1184022586242332_1180350042294850247_n.jpg?ccb=11-4&oh=01_Q5Aa1gGXDaDi4YvHQVAGBQUC8pQ3Sjw09G_tLyiHanHvH1GweQ&oe=6838025A&_nc_sid=5e03e0&_nc_cat=100"/>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          Hi, I'm <span className="gradient-text">Asipul Bahri</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          A passionate <span className="font-semibold text-primary">Full-Stack Developer</span> creating modern and responsive web applications. I turn ideas into reality with code.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Button size="lg" onClick={scrollToProjects} className="shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300">
            View My Work <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" onClick={scrollToContact} className="shadow-lg hover:shadow-accent/50 transform hover:scale-105 transition-all duration-300">
            Get In Touch
          </Button>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
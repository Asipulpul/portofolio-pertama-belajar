import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce website with product listings, cart functionality, and user authentication. Built with React and Node.js.",
    imageName: "ecommerce-project",
    tags: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool to help teams organize and track their work. Features drag-and-drop interface and real-time updates.",
    imageName: "task-app-project",
    tags: ["Vue.js", "Firebase", "Vuetify"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio website, designed to showcase my skills and projects. Built with React, Framer Motion, and TailwindCSS.",
    imageName: "portfolio-project",
    tags: ["React", "Framer Motion", "TailwindCSS"],
    liveLink: "#",
    githubLink: "#",
  },
];

const ProjectsSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.custom
              key={project.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex"
            >
              <Card className="flex flex-col w-full bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 border-none overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <img  
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                      alt={`Screenshot of ${project.title}`}
                     src="https://images.unsplash.com/photo-1701330415757-c1d36ca4d2af" />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-xl font-semibold mb-2 text-foreground">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">{tag}</span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-end space-x-3">
                  {project.githubLink && project.githubLink !== "#" && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${project.title}`}>
                        <Github className="h-4 w-4 mr-2" /> GitHub
                      </a>
                    </Button>
                  )}
                  {project.liveLink && project.liveLink !== "#" && (
                    <Button variant="default" size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${project.title}`}>
                        <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.custom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
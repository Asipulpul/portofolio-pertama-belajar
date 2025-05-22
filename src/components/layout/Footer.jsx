import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
];

const Footer = () => {
  return (
    <motion.footer 
      className="bg-secondary/50 text-secondary-foreground py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={link.label}
            >
              <link.icon className="h-6 w-6" />
            </motion.a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Asipul Bahri. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Built with React, TailwindCSS, and Framer Motion.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
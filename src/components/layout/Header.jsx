import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto px-4 md:px-8 h-20 flex justify-between items-center">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="flex items-center gap-2">
          <Briefcase className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold gradient-text">MyPortfolio</span>
        </a>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              onClick={() => scrollToSection(link.id)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Button>
          ))}
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/90 backdrop-blur-md pb-4"
        >
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                className="text-foreground hover:text-primary transition-colors w-full text-lg"
              >
                {link.label}
              </Button>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
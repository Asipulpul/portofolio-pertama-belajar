import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="relative h-64 overflow-hidden">
        <img  
          className="w-full h-full object-cover brightness-[0.85]" 
          alt="Coffee shop interior with warm lighting and cozy atmosphere"
         src="https://images.unsplash.com/photo-1538078813755-ba9b7ac8e6c3" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10 flex flex-col justify-end p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-white text-3xl font-bold mb-2 drop-shadow-md">Brew Haven</h1>
            <p className="text-white/90 text-sm mb-4 drop-shadow-md">
              Discover your perfect cup of happiness
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <Input 
              placeholder="Search for coffee, pastries..." 
              className="pl-10 bg-white/90 backdrop-blur-sm border-transparent focus-visible:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.6 }}
      >
        <div className="flex items-center gap-2 px-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-xs font-medium">Open Now • Until 9:00 PM</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
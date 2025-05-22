import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '@/data/coffeeData';

const CategoryList = () => {
  const navigate = useNavigate();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-4">
      <h2 className="text-xl font-bold mb-4 px-4">Categories</h2>
      
      <motion.div 
        className="flex overflow-x-auto gap-3 px-4 pb-2 no-scrollbar"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/menu?category=${category.id}`)}
            className="flex flex-col items-center min-w-[80px] cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-2 text-2xl">
              {category.icon}
            </div>
            <span className="text-xs font-medium text-center">{category.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CategoryList;
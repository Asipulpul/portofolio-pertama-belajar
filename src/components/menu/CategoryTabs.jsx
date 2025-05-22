import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '@/data/coffeeData';

const CategoryTabs = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex space-x-2 px-4 py-2 min-w-max">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'text-white'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {activeCategory === category.id && (
              <motion.div
                layoutId="categoryBackground"
                className="absolute inset-0 bg-primary rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative flex items-center gap-1">
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
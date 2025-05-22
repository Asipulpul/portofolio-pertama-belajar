import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ProductOptions = ({ options, selectedOptions, onOptionChange }) => {
  if (!options || options.length === 0) return null;

  return (
    <div className="space-y-4">
      {options.map((option) => (
        <div key={option.name} className="space-y-2">
          <h3 className="font-medium text-sm">{option.name}</h3>
          <div className="grid grid-cols-2 gap-2">
            {option.choices.map((choice) => {
              const isSelected = selectedOptions[option.name] === choice;
              
              return (
                <motion.button
                  key={choice}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onOptionChange(option.name, choice)}
                  className={`relative px-3 py-2 rounded-md text-sm border ${
                    isSelected 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border text-foreground'
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span>{choice}</span>
                    {isSelected && (
                      <Check className="h-3.5 w-3.5 text-primary" />
                    )}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;
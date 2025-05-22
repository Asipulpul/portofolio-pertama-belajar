import React from 'react';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

const RewardsCard = () => {
  // Simulate a user with 4 out of 8 stamps collected
  const totalStamps = 8;
  const collectedStamps = 4;
  
  return (
    <motion.div 
      className="mx-4 rounded-xl overflow-hidden coffee-gradient text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold">Rewards Card</h3>
            <p className="text-xs text-white/90">
              Collect {totalStamps} stamps for a free drink
            </p>
          </div>
          <div className="bg-white/20 p-2 rounded-full">
            <Coffee className="h-5 w-5" />
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-2 mb-3">
          {Array.from({ length: totalStamps }).map((_, index) => (
            <div 
              key={index}
              className={`aspect-square rounded-full flex items-center justify-center ${
                index < collectedStamps 
                  ? 'bg-white text-primary' 
                  : 'bg-white/20'
              }`}
            >
              {index < collectedStamps ? (
                <Coffee className="h-4 w-4" />
              ) : null}
            </div>
          ))}
        </div>
        
        <div className="text-xs text-white/90 text-center">
          {collectedStamps} of {totalStamps} stamps collected
        </div>
      </div>
    </motion.div>
  );
};

export default RewardsCard;
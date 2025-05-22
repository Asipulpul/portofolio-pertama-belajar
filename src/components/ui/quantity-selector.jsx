import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const QuantitySelector = ({ quantity, onIncrease, onDecrease, min = 1, max = 99 }) => {
  return (
    <div className="flex items-center space-x-2">
      <Button 
        variant="outline" 
        size="icon" 
        className="h-8 w-8 rounded-full"
        onClick={onDecrease}
        disabled={quantity <= min}
      >
        <Minus className="h-3 w-3" />
      </Button>
      
      <motion.div 
        key={quantity}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-8 text-center font-medium"
      >
        {quantity}
      </motion.div>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="h-8 w-8 rounded-full"
        onClick={onIncrease}
        disabled={quantity >= max}
      >
        <Plus className="h-3 w-3" />
      </Button>
    </div>
  );
};

export { QuantitySelector };
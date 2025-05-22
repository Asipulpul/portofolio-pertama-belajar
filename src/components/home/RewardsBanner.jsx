import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RewardsBanner = () => {
  return (
    <motion.section 
      className="mx-4 my-6 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="coffee-gradient p-4 text-white">
        <div className="flex items-start">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-1">Rewards Program</h3>
            <p className="text-xs text-white/90 mb-3">
              Join now and get a free drink after your first purchase!
            </p>
            <Button size="sm" variant="secondary" className="text-primary font-medium">
              Join Now
            </Button>
          </div>
          <div className="bg-white/20 p-3 rounded-full">
            <Gift className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default RewardsBanner;
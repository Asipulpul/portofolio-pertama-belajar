import React from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const ProfileHeader = () => {
  return (
    <motion.div 
      className="flex items-center justify-between p-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-16 w-16 border-2 border-primary">
          <AvatarImage src="" alt="User" />
          <AvatarFallback className="bg-primary text-primary-foreground text-lg">
            JD
          </AvatarFallback>
        </Avatar>
        
        <div>
          <h2 className="font-bold text-xl">Asipul Bahri</h2>
          <p className="text-sm text-muted-foreground">asipulb16@gmail.com</p>
        </div>
      </div>
      
      <Button variant="ghost" size="icon">
        <Settings className="h-5 w-5" />
      </Button>
    </motion.div>
  );
};

export default ProfileHeader;
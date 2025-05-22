import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { motion } from 'framer-motion';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <motion.main 
        className="flex-1 pb-16 overflow-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>
      <BottomNavigation />
    </div>
  );
};

export default Layout;
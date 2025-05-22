import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Coffee, ShoppingBag, User } from 'lucide-react';
import { motion } from 'framer-motion';

const BottomNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/menu', icon: Coffee, label: 'Menu' },
    { path: '/cart', icon: ShoppingBag, label: 'Cart' },
    { path: '/profile', icon: User, label: 'Profile' }
  ];

  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className="nav-item relative w-full h-full flex items-center justify-center"
            >
              {isActive && (
                <motion.div
                  layoutId="navigation-pill"
                  className="absolute top-0 w-12 h-1 bg-primary rounded-b-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <div className="flex flex-col items-center justify-center">
                <item.icon className={`w-5 h-5 mb-1 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                <span className={`text-xs ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                  {item.label}
                </span>
              </div>
            </NavLink>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default BottomNavigation;
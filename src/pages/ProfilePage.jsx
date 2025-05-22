import React from 'react';
import { motion } from 'framer-motion';
import { LogOut, CreditCard, MapPin, Bell, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ProfileHeader from '@/components/profile/ProfileHeader';
import RewardsCard from '@/components/profile/RewardsCard';
import OrderHistory from '@/components/profile/OrderHistory';

const ProfilePage = () => {
  const menuItems = [
    { icon: CreditCard, label: 'Payment Methods' },
    { icon: MapPin, label: 'Saved Addresses' },
    { icon: Bell, label: 'Notifications' },
    { icon: HelpCircle, label: 'Help & Support' },
  ];

  return (
    <div className="pb-6">
      <ProfileHeader />
      <Separator className="my-4" />
      
      <RewardsCard />
      
      <motion.div 
        className="mt-6 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="font-bold text-lg mb-3">Account Settings</h3>
        
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <motion.div 
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (index * 0.1) }}
              className="flex items-center"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <OrderHistory />
      
      <div className="px-4 mt-6">
        <Button variant="outline" className="w-full text-muted-foreground">
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
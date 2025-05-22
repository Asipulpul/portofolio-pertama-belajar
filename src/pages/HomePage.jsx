import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import CategoryList from '@/components/home/CategoryList';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import RewardsBanner from '@/components/home/RewardsBanner';

const HomePage = () => {
  return (
    <div className="pb-6">
      <HeroSection />
      <div className="mt-8">
        <CategoryList />
        <FeaturedProducts />
        <RewardsBanner />
      </div>
    </div>
  );
};

export default HomePage;
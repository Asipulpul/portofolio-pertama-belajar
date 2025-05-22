import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import CategoryTabs from '@/components/menu/CategoryTabs';
import ProductCard from '@/components/menu/ProductCard';
import { categories, getProductsByCategory } from '@/data/coffeeData';

const MenuPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || categories[0].id;
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts(getProductsByCategory(activeCategory));
  }, [activeCategory]);

  return (
    <div className="pb-6">
      <div className="sticky top-0 z-10 bg-background pt-4 pb-2">
        <div className="px-4 mb-4 flex items-center">
          <h1 className="text-2xl font-bold flex-1">Menu</h1>
        </div>
        
        <CategoryTabs 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
      </div>
      
      <div className="px-4 mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            
            {products.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No products found in this category.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MenuPage;
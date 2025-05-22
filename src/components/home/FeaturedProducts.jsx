import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getFeaturedProducts } from '@/data/coffeeData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const featuredProducts = getFeaturedProducts();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-4">
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-xl font-bold">Featured Items</h2>
        <button 
          onClick={() => navigate('/menu')}
          className="text-primary text-sm font-medium"
        >
          See All
        </button>
      </div>
      
      <motion.div 
        className="flex overflow-x-auto gap-4 px-4 pb-2 no-scrollbar"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {featuredProducts.map((product) => (
          <motion.div 
            key={product.id}
            variants={item}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="min-w-[160px] max-w-[160px]"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <Card className="overflow-hidden h-full cursor-pointer">
              <div className="relative h-32 w-full overflow-hidden">
                <img  
                  className="w-full h-full object-cover" 
                  alt={product.name}
                 src="https://images.unsplash.com/photo-1685419036628-55508eb00c6f" />
                <Badge 
                  variant="secondary" 
                  className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm text-primary"
                >
                  ${product.price.toFixed(2)}
                </Badge>
              </div>
              <CardContent className="p-3">
                <h3 className="font-medium text-sm line-clamp-1">{product.name}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedProducts;
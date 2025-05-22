import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        className="flex overflow-hidden cursor-pointer"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <div className="w-24 h-24 relative">
          <img  
            className="w-full h-full object-cover" 
            alt={product.name}
           src="https://images.unsplash.com/photo-1685419036628-55508eb00c6f" />
        </div>
        
        <div className="flex-1 p-3 flex flex-col justify-between">
          <div>
            <h3 className="font-medium text-sm">{product.name}</h3>
            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
              {product.description}
            </p>
          </div>
          
          <div className="flex justify-between items-center mt-2">
            <span className="font-medium">${product.price.toFixed(2)}</span>
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-8 w-8 rounded-full"
              onClick={handleAddToCart}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
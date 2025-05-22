import React from 'react';
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QuantitySelector } from '@/components/ui/quantity-selector';
import { useCart } from '@/contexts/CartContext';

const CartItem = ({ item }) => {
  const { updateCartItemQuantity, removeFromCart } = useCart();
  
  const handleIncrease = () => {
    updateCartItemQuantity(item.id, item.quantity + 1);
  };
  
  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateCartItemQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <motion.div 
      className="flex items-center gap-3 py-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      layout
    >
      <div className="w-16 h-16 rounded-lg overflow-hidden">
        <img  
          className="w-full h-full object-cover" 
          alt={item.name}
         src="https://images.unsplash.com/photo-1685419036628-55508eb00c6f" />
      </div>
      
      <div className="flex-1">
        <h3 className="font-medium text-sm">{item.name}</h3>
        <div className="text-xs text-muted-foreground mt-1">
          {item.selectedOptions && Object.entries(item.selectedOptions).map(([key, value]) => (
            <span key={key} className="mr-2">
              {value}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
          <div className="flex items-center gap-2">
            <QuantitySelector
              quantity={item.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-muted-foreground hover:text-destructive"
              onClick={() => removeFromCart(item.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
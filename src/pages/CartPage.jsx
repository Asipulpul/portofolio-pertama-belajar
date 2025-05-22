import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import { useCart } from '@/contexts/CartContext';

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  
  const isEmpty = cart.length === 0;

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Your Cart</h1>
      </div>
      
      <Separator />
      
      <div className="flex-1 overflow-auto p-4">
        {isEmpty ? (
          <motion.div 
            className="flex flex-col items-center justify-center h-full text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="bg-muted w-20 h-20 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Add some delicious items to your cart
            </p>
            <Button onClick={() => navigate('/menu')}>
              Browse Menu
            </Button>
          </motion.div>
        ) : (
          <AnimatePresence>
            <div className="space-y-1">
              {cart.map((item) => (
                <React.Fragment key={item.id}>
                  <CartItem item={item} />
                  <Separator />
                </React.Fragment>
              ))}
            </div>
            
            <div className="mt-4 text-right">
              <Button 
                variant="ghost" 
                className="text-muted-foreground"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
          </AnimatePresence>
        )}
      </div>
      
      {!isEmpty && <CartSummary />}
    </div>
  );
};

export default CartPage;
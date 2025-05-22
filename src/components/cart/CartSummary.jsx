import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';

const CartSummary = () => {
  const { cartTotal } = useCart();
  const { toast } = useToast();
  
  const deliveryFee = 2.99;
  const tax = cartTotal * 0.08; // 8% tax
  const total = cartTotal + deliveryFee + tax;
  
  const handleCheckout = () => {
    toast({
      title: "Checkout initiated",
      description: "This would connect to a payment processor in a real app.",
      duration: 3000,
    });
  };

  return (
    <motion.div 
      className="bg-card rounded-t-xl shadow-lg p-4 border-t"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <h3 className="font-semibold mb-4">Order Summary</h3>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        <div className="border-t my-2 pt-2">
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <Button 
        className="w-full mt-4" 
        size="lg"
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </Button>
    </motion.div>
  );
};

export default CartSummary;
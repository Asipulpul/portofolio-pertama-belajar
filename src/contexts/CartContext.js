import React, { createContext, useContext, useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const { toast } = useToast();

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('coffeeShopCart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
        localStorage.removeItem('coffeeShopCart');
      }
    }
  }, []);

  // Update localStorage and cart metrics whenever cart changes
  useEffect(() => {
    localStorage.setItem('coffeeShopCart', JSON.stringify(cart));
    
    // Calculate cart count and total
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const price = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    setCartCount(count);
    setCartTotal(price);
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + quantity
        };
        
        toast({
          title: "Added to cart",
          description: `${product.name} quantity updated to ${updatedCart[existingItemIndex].quantity}`,
          duration: 2000,
        });
        
        return updatedCart;
      } else {
        // Item doesn't exist, add new item
        toast({
          title: "Added to cart",
          description: `${quantity} ${product.name} added to your cart`,
          duration: 2000,
        });
        
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const updateCartItemQuantity = (productId, quantity) => {
    setCart(prevCart => {
      return prevCart.map(item => 
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const itemToRemove = prevCart.find(item => item.id === productId);
      
      if (itemToRemove) {
        toast({
          title: "Removed from cart",
          description: `${itemToRemove.name} removed from your cart`,
          duration: 2000,
        });
      }
      
      return prevCart.filter(item => item.id !== productId);
    });
  };

  const clearCart = () => {
    setCart([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
      duration: 2000,
    });
  };

  return (
    <CartContext.Provider value={{
      cart,
      cartCount,
      cartTotal,
      addToCart,
      updateCartItemQuantity,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
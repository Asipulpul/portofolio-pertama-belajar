import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QuantitySelector } from '@/components/ui/quantity-selector';
import ProductOptions from '@/components/product/ProductOptions';
import { getProductById } from '@/data/coffeeData';
import { useCart } from '@/contexts/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    
    const fetchedProduct = getProductById(id);
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      
      // Initialize default selected options
      const defaultOptions = {};
      if (fetchedProduct.options) {
        fetchedProduct.options.forEach(option => {
          defaultOptions[option.name] = option.choices[0];
        });
      }
      setSelectedOptions(defaultOptions);
    }
    
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [id]);
  
  const handleOptionChange = (optionName, choice) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionName]: choice
    }));
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart({
        ...product,
        selectedOptions
      }, quantity);
      navigate(-1);
    }
  };
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="p-4 text-center">
        <p>Product not found</p>
        <Button onClick={() => navigate(-1)} className="mt-4">
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="pb-6">
      <div className="relative h-72">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm rounded-full"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm rounded-full"
        >
          <Heart className="h-5 w-5" />
        </Button>
        
        <img  
          className="w-full h-full object-cover" 
          alt={product.name}
         src="https://images.unsplash.com/photo-1685419036628-55508eb00c6f" />
      </div>
      
      <motion.div 
        className="p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-start mb-2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
        </div>
        
        <p className="text-muted-foreground mb-6">{product.description}</p>
        
        <div className="space-y-6">
          <ProductOptions 
            options={product.options} 
            selectedOptions={selectedOptions}
            onOptionChange={handleOptionChange}
          />
          
          <div>
            <h3 className="font-medium text-sm mb-2">Quantity</h3>
            <QuantitySelector
              quantity={quantity}
              onIncrease={() => setQuantity(prev => prev + 1)}
              onDecrease={() => setQuantity(prev => Math.max(1, prev - 1))}
            />
          </div>
          
          <Button 
            className="w-full" 
            size="lg"
            onClick={handleAddToCart}
          >
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductPage;
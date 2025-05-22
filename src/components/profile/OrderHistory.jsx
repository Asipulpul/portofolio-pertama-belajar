import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const OrderHistory = () => {
  // Sample order history data
  const orders = [
    {
      id: 'ORD-1234',
      date: '2025-05-14',
      items: ['Cappuccino', 'Butter Croissant'],
      total: 8.49,
      status: 'Completed'
    },
    {
      id: 'ORD-1233',
      date: '2025-05-10',
      items: ['Iced Americano', 'Avocado Toast'],
      total: 10.98,
      status: 'Completed'
    },
    {
      id: 'ORD-1232',
      date: '2025-05-05',
      items: ['Chai Latte', 'Blueberry Muffin'],
      total: 8.49,
      status: 'Completed'
    }
  ];
  
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
    <section className="p-4">
      <h3 className="font-bold text-lg mb-3">Order History</h3>
      
      <motion.div 
        className="space-y-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {orders.map((order) => (
          <motion.div key={order.id} variants={item}>
            <Card className="overflow-hidden">
              <CardContent className="p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-sm">{order.id}</h4>
                      <Badge variant="outline" className="text-xs">
                        {order.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(order.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-xs mt-2">
                      {order.items.join(', ')}
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="font-medium text-sm mr-1">${order.total.toFixed(2)}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OrderHistory;
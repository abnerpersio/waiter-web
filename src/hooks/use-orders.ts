import { useEffect, useState } from 'react';

import { OrdersService } from '../services/orders';
import { Order } from '../types/Order';

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function listProducts() {
      try {
        setIsLoading(true);
        const result = await new OrdersService().list();
        setOrders(result?.data);
      } finally {
        setIsLoading(false);
      }
    }

    listProducts();
  }, []);

  return { orders, isLoading };
}

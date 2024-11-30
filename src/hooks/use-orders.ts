import { useCallback, useEffect, useState } from 'react';

import { OrdersService } from '../services/orders';
import { Order } from '../types/order';

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const listOrders = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await new OrdersService().list();
      setOrders(result?.data);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    listOrders();
  }, []);

  return {
    orders,
    refetch: listOrders,
    isLoading,
  };
}

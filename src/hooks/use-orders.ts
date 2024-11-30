import { useCallback, useEffect, useState } from 'react';

import { OrdersService } from '../services/orders';
import { SocketService } from '../services/socket-service';
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
    const service = new SocketService();

    const listener = service.io.on('orders@new', (order) => {
      setOrders((prevOrders) => [...prevOrders, order]);
    });

    return () => {
      listener.removeListener();
    };
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

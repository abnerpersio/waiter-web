import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { OrdersService } from '../services/orders';
import { Order } from '../types/order';

type Options = {
  onSucess?: () => void;
};

export function useCancelOrder(options?: Options) {
  const [isLoading, setIsLoading] = useState(false);

  const mutate = useCallback(
    async (order: Order) => {
      try {
        setIsLoading(true);
        await new OrdersService().cancel(order._id);
        options?.onSucess?.();
        toast.success(`Pedido da mesa ${order.table} cancelado!`);
      } finally {
        setIsLoading(false);
      }
    },
    [options],
  );

  return { mutate, isLoading };
}

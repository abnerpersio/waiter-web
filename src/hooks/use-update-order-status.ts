import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { OrdersService } from '../services/orders';
import { Order, UpdateOrderStatusPayload } from '../types/order';

type Options = {
  onSucess?: () => void;
};

export function useUpdateOrderStatus(options?: Options) {
  const [isLoading, setIsLoading] = useState(false);

  const mutate = useCallback(
    async (order: Order, payload: UpdateOrderStatusPayload) => {
      try {
        setIsLoading(true);
        await new OrdersService().updateStatus(order._id, payload);
        options?.onSucess?.();
        toast.success(`Pedido da mesa ${order.table} atualizado!`);
      } finally {
        setIsLoading(false);
      }
    },
    [options],
  );

  return { mutate, isLoading };
}

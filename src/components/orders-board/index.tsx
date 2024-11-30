import { useState } from 'react';

import { useCancelOrder } from '../../hooks/use-cancel-order';
import { useUpdateOrderStatus } from '../../hooks/use-update-order-status';
import { Order } from '../../types/order';
import { OrderModal } from '../order-modal';
import { Board, OrdersList } from './styles';

type Props = {
  icon: string;
  title: string;
  orders: Order[];
  onRefetchOrders: () => void;
};

export function OrdersBoard(props: Props) {
  const { icon, title, orders, onRefetchOrders } = props;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const { mutate: cancelOrder, isLoading: isCanceling } = useCancelOrder({
    onSucess: () => {
      setSelectedOrder(null);
      setIsModalVisible(false);
      onRefetchOrders();
    },
  });

  const { mutate: updateStatus, isLoading: isUpdating } = useUpdateOrderStatus({
    onSucess: () => {
      setSelectedOrder(null);
      setIsModalVisible(false);
      onRefetchOrders();
    },
  });

  const handleCancelOrder = () => {
    cancelOrder(selectedOrder!);
  };

  const handleUpdateOrderStatus = () => {
    updateStatus(selectedOrder!, {
      status: selectedOrder!.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE',
    });
  };

  const handleOpenModal = (order: Order) => {
    setSelectedOrder(order);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
    setIsModalVisible(false);
  };

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        isUpdating={isUpdating}
        isCanceling={isCanceling}
        onClose={handleCloseModal}
        onUpdateOrderStatus={handleUpdateOrderStatus}
        onCancelOrder={handleCancelOrder}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersList>
          {orders.map((order) => (
            <button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
              <strong>Mesa {order.table}</strong>

              <span>
                {order.products.length} {order.products.length > 1 ? 'itens' : 'item'}
              </span>
            </button>
          ))}
        </OrdersList>
      )}
    </Board>
  );
}

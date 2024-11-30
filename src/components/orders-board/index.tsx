import { useState } from 'react';

import { Order } from '../../types/Order';
import { OrderModal } from '../order-modal';
import { Board, OrdersList } from './styles';

type Props = {
  icon: string;
  title: string;
  orders: Order[];
};

export function OrdersBoard({ icon, title, orders }: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setSelectedOrder(order);
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    setSelectedOrder(null);
    setIsModalVisible(false);
  }

  return (
    <Board>
      <OrderModal visible={isModalVisible} order={selectedOrder} onClose={handleCloseModal} />

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

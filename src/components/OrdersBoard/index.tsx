import { Order } from '../../types/Order';
import { Board, OrdersList } from './styles';

type Props = {
  icon: string;
  title: string;
  orders: Order[];
};

export function OrdersBoard({ icon, title, orders }: Props) {
  function handleOpenModal() {
    alert('modal foi aberto');
  }

  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersList>
          {orders.map((order) => (
            <button type="button" key={order._id} onClick={handleOpenModal}>
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

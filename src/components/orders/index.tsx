import { useOrders } from '../../hooks/use-orders';
import { STATUS_MAPPING } from '../../shared/constants/status';
import { OrdersBoard } from '../orders-board';
import { Container } from './styles';

export function Orders() {
  const { orders, isLoading } = useOrders();

  return (
    <Container>
      {Object.entries(STATUS_MAPPING).map(([status, { icon, title }]) => (
        <OrdersBoard
          key={status}
          icon={icon}
          title={title}
          orders={orders.filter((order) => status === order.status)}
        />
      ))}
    </Container>
  );
}

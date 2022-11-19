import { STATUS_MAPPING } from '../../shared/constants/status';
import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    _id: '6376f32ce5114cca7b8d7cdf',
    table: '12345',
    status: 'WAITING',
    products: [
      {
        _id: '6376f32ce5114cca7b8d7ce0',
        quantity: 3,
        product: {
          name: 'Pizza 4 queijos',
          imagePath: '1668739027794-quatro-queijos.png',
          price: 40,
        },
      },
      {
        _id: '6376f32ce5114cca7b8d7ce0',
        quantity: 2,
        product: {
          name: 'Frango e catupiry',
          imagePath: '1668865259405-frango-catupiry.png',
          price: 12,
        },
      },
    ],
  },
];

export function Orders() {
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

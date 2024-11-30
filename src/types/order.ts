type OrderStatus = 'WAITING' | 'IN_PRODUCTION' | 'DONE';

export type Order = {
  _id: string;
  table: string;
  status: OrderStatus;
  products: {
    _id: string;
    quantity: number;
    product: {
      name: string;
      imagePath: string;
      price: number;
    };
  }[];
};

export type UpdateOrderStatusPayload = {
  status: OrderStatus;
};

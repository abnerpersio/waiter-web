export const API_BASE_PATH = 'http://localhost:3001';

export const API_ROUTES = {
  orders: {
    list: '/orders',
    cancel: '/orders/:orderId',
    update: '/orders/:orderId',
  },
};

import { API_ROUTES } from '../config/api';
import { Order, UpdateOrderStatusPayload } from '../types/order';
import { HttpService } from './http-service';

export class OrdersService {
  private readonly httpService: HttpService;

  constructor() {
    this.httpService = new HttpService();
  }

  list() {
    return this.httpService.get<Order[]>(API_ROUTES.orders.list);
  }

  updateStatus(orderId: string, payload: UpdateOrderStatusPayload) {
    return this.httpService.patch(API_ROUTES.orders.update.replace(':orderId', orderId), payload);
  }

  cancel(orderId: string) {
    return this.httpService.delete(API_ROUTES.orders.cancel.replace(':orderId', orderId));
  }
}

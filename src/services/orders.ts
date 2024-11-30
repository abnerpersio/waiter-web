import { API_ROUTES } from '../config/api';
import { Order } from '../types/Order';
import { HttpService } from './http-service';

export class OrdersService {
  private readonly httpService: HttpService;

  constructor() {
    this.httpService = new HttpService();
  }

  list() {
    return this.httpService.get<Order[]>(API_ROUTES.orders.list);
  }
}

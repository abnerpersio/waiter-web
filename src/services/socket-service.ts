import socketIo, { Socket } from 'socket.io-client';

import { API_BASE_PATH } from '../config/api';

export class SocketService {
  readonly io: Socket;

  constructor() {
    this.io = socketIo(API_BASE_PATH, {
      transports: ['websocket'],
    });
  }
}

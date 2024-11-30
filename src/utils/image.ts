import { API_BASE_PATH } from '../config/api';

export function generateImagePath(path: string) {
  return `${API_BASE_PATH}/uploads/${path}`;
}

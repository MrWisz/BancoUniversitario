import { http } from './http';
import { getJWT } from './jwt';

class AuthService {
  constructor() {
    this.BASE = '/v1/public/client/user';
  }

  async login(values) {
    try {
      const response = await http.post(`${this.BASE}/login`, values);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      const response = await http.post(`${this.BASE}/logout`, null, {
        headers: {
          Authorization: `Bearer ${getJWT()}`,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();
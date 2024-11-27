import axios from 'axios';
import { getJWT, setSession, clearSession } from './jwt';

export const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  validateStatus: (status) => {
    return status < 500;
  },
});

http.interceptors.request.use(
  (config) => {
    const token = getJWT();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getConnection = async () => {
  const { data, status } = await http.get('/');
  return { data, status };
};

export const login = async (credentials) => {
  try {
    const response = await http.post('/login', credentials);
    if (response.data.token) {
      setSession({ token: response.data.token });
    }
    return response;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logout = () => {
  clearSession();
};

export const TResponseData = {
  error: '',
  data: null,
  status: 0,
  statusText: '',
  token: '',
};
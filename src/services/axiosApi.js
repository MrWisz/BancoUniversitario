import axios from 'axios';
import { getJWT } from '../utils/localStorage';

export const API_URL_BACKEND = process.env.REACT_APP_API_URL_BACKEND;
const AXIOS_TIMEOUT_MS = process.env.REACT_APP_AXIOS_TIMEOUT_MS || 10000;

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const apiHttp = async (method, endpoint, data = null, params = null, options = {}) => {
  // Header options
  options.headers = {
    ...defaultHeaders,
    ...options.headers,
  };

  const jwt = getJWT();
  if (jwt) {
    options.headers['Authorization'] = `Bearer ${jwt}`;
  }

  const url = `${API_URL_BACKEND}${endpoint}`;
  console.log(`${method.toUpperCase()} ${url}`);

  try {
    const response = await axios({
      method: method.toLowerCase(),
      url,
      params,
      data,
      timeout: AXIOS_TIMEOUT_MS,
      ...options,
    });

    console.log('promise', response);
    return {
      data: response.data,
      headers: response.headers,
    };
  } catch (error) {
    if (error.response) {
      console.log('apiHttp -> error.response', error.response);
      return {
        error: true,
        status: error.response.status,
        message: error.response.data.message || 'An error occurred',
        data: error.response.data,
      };
    } else {
      console.log('apiHttp -> error', error);
      return {
        error: true,
        message: error.message || 'An error occurred',
      };
    }
  }
};
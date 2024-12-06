import { apiHttp } from "../axiosApi";

export const getMovementsAPI = (pagination) => apiHttp("GET", `/v1/client/movement`, null, pagination);

export const createMovementAPI = (data) => apiHttp("POST", `/v1/client/movement`, data);

export const getPaginatedMovementsAPI = (page, pageSize) => apiHttp("GET", `/v1/client/movement?page=${page}&page_size=${pageSize}&sort=created_at:desc`);
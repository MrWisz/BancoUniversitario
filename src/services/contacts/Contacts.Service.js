import { apiHttp } from "../axiosApi";

export const getContactAPI = (id) => apiHttp("GET", `/v1/client/contact/${id}`);
export const createContactAPI = (data) => apiHttp("POST", `/v1/client/contact`, data);
export const updateContactAPI = (id, data) => apiHttp("PUT", `/v1/client/contact/${id}`, data);
export const deleteContactAPI = (id) => apiHttp("DELETE", `/v1/client/contact/${id}`);
export const getContactsListAPI = (page = 1, pageSize = 20) => apiHttp("GET", `/v1/client/contact?page=${page}&page_size=${pageSize}`);
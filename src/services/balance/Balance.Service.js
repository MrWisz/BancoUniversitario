import { apiHttp } from "../axiosApi";

export const getBalanceAPI = () => apiHttp("GET", `/v1/client/user/balance`);
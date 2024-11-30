import { apiHttp } from "../axiosApi"

export const getBalanceAPI = (pagination) => apiHttp("GET", `/v1/client/user/balance`, null, pagination)
  
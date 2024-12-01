import { apiHttp } from "../axiosApi";

export const passwordAPI = (passwordValues) => apiHttp("POST", `/v1/client/user/password`, passwordValues);
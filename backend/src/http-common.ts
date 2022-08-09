import axios, { AxiosInstance } from 'axios';

export const getHttpInstance = (baseURL: string, token: string) : AxiosInstance => {
  return axios.create({
    baseURL: baseURL,
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    withCredentials: true,
  });
};

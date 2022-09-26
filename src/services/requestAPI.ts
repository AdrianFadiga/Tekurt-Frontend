import axios, { AxiosRequestConfig } from 'axios';
import { IResponseAPI } from '../interfaces/IResponseAPI';

export const requestAPI = async <T> (options: AxiosRequestConfig): Promise<IResponseAPI<T>> => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const newOptions = { ...options, url: `${BASE_URL}/${options.url}` };
  try {
    const {data, status} = await axios(newOptions);

    return {data, status};
  } catch (err: any) {
    const { data, status } = err.response;

    throw { data, status, error: true };
  }
};
import axios from 'axios';
import { IOptionsRequest } from '../interfaces/IOptionsRequest';
import { IResponseAPI } from '../interfaces/IResponseAPI';

export const requestAPI = async (options: IOptionsRequest) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const newOptions = { ...options, url: `${BASE_URL}/${options.url}` };
  try {
    const { data, status } = await axios(newOptions);

    return { data, status } as IResponseAPI;
  } catch (err: any) {
    const { data, status } = err.response;

    return { data, status, error: true } as IResponseAPI;
  }
};
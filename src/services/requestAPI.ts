import axios from 'axios';

type OptionsRequest = {
  method: string,
  data?: any,
  url: string,
  headers?: { authorization: string }
}

export const requestAPI = async (options: OptionsRequest) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const newOptions = { ...options, url: `${BASE_URL}/${options.url}` };
  try {
    const { data } = await axios(newOptions);

    return { data };
  } catch (err: any) {
    const { data, status } = err.response;

    return { data, status, error: true };
  }
};
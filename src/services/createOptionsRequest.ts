// import { Headers } from '../interfaces/IOptionsRequest';

export const createOptionsRequest = <T> (method: string, data: T, url: string, headers?: any) => ({
  method, data, url, headers
});
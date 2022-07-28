import { Headers } from '../interfaces/IOptionsRequest';

export const createOptionsRequest = <T> (method: string, data: T, url: string, headers?: Headers) => ({
  method, data, url, headers
});
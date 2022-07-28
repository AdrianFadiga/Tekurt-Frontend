export type Headers = { authorization: string }

export interface IOptionsRequest<T> {
  method: string,
  data?: T,
  url: string,
  headers?: Headers
}
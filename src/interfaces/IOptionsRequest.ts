export interface IOptionsRequest {
  method: string,
  data?: any,
  url: string,
  headers?: { authorization: string }
}
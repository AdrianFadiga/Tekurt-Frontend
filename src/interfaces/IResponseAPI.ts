export interface IResponseAPI {
  data: {
    message?: string,
    token?: string
  }
  status: number,
  error: boolean
}

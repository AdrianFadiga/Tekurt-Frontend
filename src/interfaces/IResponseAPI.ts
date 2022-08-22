export interface IResponseAPI {
  data: {
    message?: string,
    access_token?: string
  }
  status: number,
  error: boolean
}

import type { AxiosRequestConfig as BaseAxiosRequestConfig } from 'axios'

export type AxiosRequestConfig = BaseAxiosRequestConfig & { loading?: boolean }

export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined

export interface RequestOptions {
  // Splicing request parameters to url
  joinParamsToUrl?: boolean
  // Format request parameter time
  formatDate?: boolean
  //  Whether to process the request result
  isTransformRequestResult?: boolean
  // Whether to join url
  joinPrefix?: boolean
  // Interface address, use the default apiUrl if you leave it blank
  apiUrl?: string
  // Error message prompt type
  errorMessageMode?: ErrorMessageMode
  // Whether to add a timestamp
  joinTime?: boolean
  ignoreCancelToken?: boolean
}

export interface Result<T = any> {
  code: number
  type: 'success' | 'error' | 'warning'
  message: string
  data: T
}

// multipart/form-data: upload file
export interface UploadFileParams {
  // Other parameters
  data?: any
  // File parameter interface field name
  name?: string
  // file name
  file: File | Blob
  // file name
  filename?: string
  [key: string]: any
}

export enum ResultEnum {
  SUCCESS = 0,
  ERROR = 1,
  TIMEOUT = 401,
  TYPE = 'success',
}

export enum ContentTypeEnum {
  JSON = 'application/json;charset=UTF-8',
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

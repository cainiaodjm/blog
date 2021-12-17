/*
 * @Author: your name
 * @Date: 2021-12-17 14:07:20
 * @LastEditTime: 2021-12-17 14:07:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /blog/src/plugins/http/types.d.ts
 */
/*
 * @Author: your name
 * @Date: 2021-12-13 18:00:40
 * @LastEditTime: 2021-12-16 15:30:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /main/src/plugins/http/types.d.ts
 */
import { Method, AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";

export type RequestMethods = Extract<
  Method,
  "get" | "post" | "put" | "delete" | "patch" | "option" | "head"
>;

export interface PureHttpError extends AxiosError {
  isCancelRequest?: boolean;
}
export interface PureHttpRequestConfig extends AxiosRequestConfig {
  beforeRequestCallback?: (request: PureHttpRequestConfig) => void;
  beforeResponseCallback?: (response: PureHttpResoponse) => void;
}
export interface PureHttpResponse extends AxiosResponse {
  config: PureHttpRequestConfig;
}

export default class PureHttp {
  request<T>(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    axiosConfig?: PureHttpRequestConfig
  ): Promise<T>;

  post<T>(url: string, params?: T, config?: PureHttpRequestConfig): Promise<T>;

  get<T>(url: string, params?: T, config?: PureHttpRequestConfig): Promise<T>;
}
export type resultType = {
  accessToken?: string;
};

/*
 * @Author: your name
 * @Date: 2021-12-17 14:07:01
 * @LastEditTime: 2021-12-17 14:07:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /blog/src/plugins/http/axios.ts
 */
/*
 * @Author: your name
 * @Date: 2021-12-08 19:37:04
 * @LastEditTime: 2021-12-16 15:33:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /main/src/plugins/http/axios.ts
 */
// import axios from 'axios';
import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
  resultType,
  PureHttpError,
  RequestMethods,
  PureHttpResponse,
  PureHttpRequestConfig,
} from "./types.d";

const defaultConfig: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_PROXY_REAL ? process.env.VUE_APP_PROXY_REAL : "",
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
};
class PureHttp {
  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }

  // eslint-disable-next-line class-methods-use-this
  private httpInterceptorsRequest(): void {
    PureHttp.axiosInstance.interceptors.request.use(
      (config: PureHttpRequestConfig) => {
        const $config = config;
        // 优先判断post/get等方法是否传入回掉，否则执行初始化设置等回掉
        if (typeof config.beforeRequestCallback === "function") {
          config.beforeRequestCallback($config);
          return $config;
        }
        if (PureHttp.initConfig.beforeRequestCallback) {
          PureHttp.initConfig.beforeRequestCallback($config);
          return $config;
        }

        return $config;
      },
      (error) => Promise.reject(error)
    );
  }

  // eslint-disable-next-line class-methods-use-this
  private httpInterceptorsResponse(): void {
    const instance = PureHttp.axiosInstance;
    instance.interceptors.response.use(
      (response: PureHttpResponse) => {
        const $config = response.config;
        if (typeof $config.beforeResponseCallback === "function") {
          $config.beforeResponseCallback(response);
          return response.data;
        }
        if (PureHttp.initConfig.beforeResponseCallback) {
          PureHttp.initConfig.beforeResponseCallback(response);
          return response.data;
        }
        return response.data;
      },
      (error: PureHttpError) => {
        const $error = error;
        $error.isCancelRequest = Axios.isCancel($error);
        return Promise.reject($error);
      }
    );
  }

  // eslint-disable-next-line class-methods-use-this
  // public getConfig():AxiosRequestConfig {
  //   return defaultConfig;
  // }

  // 初始化配置对象
  private static initConfig: PureHttpRequestConfig = {};

  // get defaultConfig():string {
  //   return '';
  // }

  private static axiosInstance: AxiosInstance = Axios.create(defaultConfig);

  // 通用请求工具函数
  // eslint-disable-next-line class-methods-use-this
  public request<T>(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    axiosConfig?: PureHttpRequestConfig
  ): Promise<T> {
    const config = {
      method,
      url,
      ...param,
      ...axiosConfig,
    } as PureHttpRequestConfig;
    return new Promise((resolve, reject) => {
      PureHttp.axiosInstance
        .request(config)
        .then((response: any) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public post<T>(
    url: string,
    params?: T,
    config?: PureHttpRequestConfig
  ): Promise<T> {
    return this.request<T>("post", url, params, config);
  }

  public get<T>(
    url: string,
    params?: T,
    config?: PureHttpRequestConfig
  ): Promise<T> {
    return this.request<T>("get", url, params, config);
  }
}

export default PureHttp;
export const http = new PureHttp();

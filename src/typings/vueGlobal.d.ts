/*
 * @Author: your name
 * @Date: 2021-12-17 11:25:32
 * @LastEditTime: 2021-12-17 14:30:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /blog/src/typings/vueGlobal.d.ts
 */
// import axios from "axios";
import axios from "axios";
declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $http: typeof axios;
  }
}

export {};

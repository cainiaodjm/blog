/*
 * @Author: your name
 * @Date: 2021-12-17 11:26:31
 * @LastEditTime: 2021-12-17 14:41:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /blog/src/plugins/http/index.ts
 */
// import axios from "axios";
import { App } from "vue";
import { http } from "./axios";

// 验证数据的插件
export default {
  install(app: App, options = {}): void {
    // console.log(typeof httpInstance);

    console.log(options);
    app.config.globalProperties.$http = http;
  },
};

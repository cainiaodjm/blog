/*
 * @Author: your name
 * @Date: 2021-12-17 16:47:30
 * @LastEditTime: 2021-12-17 16:53:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /blog/src/typings/global.d.ts
 */
export interface Post {
  child_uuid: string;
  depth: number;
  doc_id: number;
  id: number;
  level: number;
  open_window: number;
  parent_uuid: string;
  prev_uuid: string;
  sibling_uuid: string;
  slug: string;
  title: string;
  type: string;
  url: string;
  uuid: string;
  visible: number;
}

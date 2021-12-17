<!--
 * @Author: your name
 * @Date: 2021-12-17 11:57:21
 * @LastEditTime: 2021-12-17 17:56:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /blog/src/views/post-list.vue
-->
<template>
  <div v-for="post in posts" :key="post.id" class="post">
    <div class="py-4">
      <router-link to="/">
        <strong>{{ post.title }}</strong>
      </router-link>
      <p class="pt-1 pb-0" :title="post.title"></p>
      <span></span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import { Post } from "../typings/global";
export default defineComponent({
  name: "PostList",
  setup() {
    // const getPostList = async () => {
    //   await fee;
    // };
    return {};
  },
  data() {
    return {
      posts: [] as Post[],
    };
  },
  mounted() {
    this.$http.get("http://47.113.217.162:8081/api/yuque/docs").then((res) => {
      this.posts = res.data || [];
    });
  },
  methods: {
    // fetchPostList() {
    //   this.$http.get("http://47.113.217.162:8081/api/yuque/toc").then((res) => {
    //     console.log(res);
    //   });
    // },
  },
});
</script>

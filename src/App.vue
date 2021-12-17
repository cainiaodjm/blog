<!--
 * @Author: your name
 * @Date: 2021-12-17 11:10:01
 * @LastEditTime: 2021-12-17 13:33:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /blog/src/App.vue
-->
<template>
  <div>
    <BlogHeader></BlogHeader>
    <BlogContainer>
      <router-view></router-view>
    </BlogContainer>
    <BlogLayout></BlogLayout>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import BlogLayout from "./components/layout.vue";
import BlogHeader from "./components/header.vue";
import BlogContainer from "./components/container.vue";
export default defineComponent({
  components: {
    BlogLayout,
    BlogHeader,
    BlogContainer,
  },
  name: "App",
});
</script>

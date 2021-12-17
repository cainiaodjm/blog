<!--
 * @Author: your name
 * @Date: 2021-12-17 12:05:53
 * @LastEditTime: 2021-12-17 12:05:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /blog/src/components/container.vue
-->
<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Container",
});
</script>

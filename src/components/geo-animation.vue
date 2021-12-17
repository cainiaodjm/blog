<!--
 * @Author: your name
 * @Date: 2021-12-17 11:52:14
 * @LastEditTime: 2021-12-17 18:11:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /blog/src/components/geo-animation.vue
-->
<template>
  <div
    id="geo-animation"
    :style="{
      opacity: 0.3,
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -1,
    }"
  ></div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "GeoAnimation",
  data() {
    return {};
  },
});
</script>

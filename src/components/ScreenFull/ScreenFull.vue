<!--
 * @Description: 全屏组件
 * @Author: 王振
 * @Date: 2022-03-16 13:15:31
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-21 18:19:49
-->
<template>
  <div id="guide-full" @click="OnClickToggle">
    <svg-icon :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"></svg-icon>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import screenfull from 'screenfull'; // https://www.npmjs.com/package/screenfull screenfull文档

// 是否全屏
const isFullscreen = ref(false);

// 触发全屏事件
const OnClickToggle = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle();
  }
};

// 监听 screenfull 变化
const change = () => {
  if (screenfull.isEnabled) {
    isFullscreen.value = screenfull.isFullscreen;
  }
};

// 设置侦听器
onMounted(() => {
  if (screenfull.isEnabled) {
    screenfull.on('change', change);
  }
});

// 删除侦听器
onUnmounted(() => {
  if (screenfull.isEnabled) {
    screenfull.off('change', change);
  }
});
</script>

<style lang="scss" scoped></style>

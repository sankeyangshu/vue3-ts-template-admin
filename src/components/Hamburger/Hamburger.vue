<!--
 * @Description: 菜单收缩组件
 * @Author: 王振
 * @Date: 2022-03-15 09:19:07
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-15 11:29:07
-->
<template>
  <div class="hamburger-container" @click="OnClickToggle">
    <svg-icon class="hamburger" :icon="icon"></svg-icon>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore(); // 获取vuex实例
const icon = computed(() => {
  return store.getters.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed';
}); // 动态计算icon显示

// 切换菜单收缩状态
const OnClickToggle = () => {
  store.commit('app/SET_SIDEBAROPENED');
};
</script>

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>

<!--
 * @Description: 模版页面
 * @Author: 王振
 * @Date: 2022-03-04 14:56:45
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-04 16:23:16
-->
<template>
  <div class="layout">
    <!-- 左侧导航栏 开始 -->
    <Sidebar class="layout__sidebar" :style="{ backgroundColor: variables.menuBg }"></Sidebar>
    <!-- 左侧导航栏 结束 -->
    <div class="layout__main">
      <!-- 顶部面包屑 开始 -->
      <div class="layout__main__header">
        <Navbar></Navbar>
      </div>
      <!-- 顶部面包屑 结束 -->

      <!-- 内容区 开始 -->
      <AppMain></AppMain>
      <!-- 内容区 结束 -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar/index.vue';
import Navbar from './components/Navbar.vue';
import AppMain from './components/AppMain.vue';
import variables from '@/styles/variables.scss';
import {} from 'vue';
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
@import '@/styles/variables.scss';
.layout {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  // &__sidebar {
  // }

  &__main {
    &__header {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 9;
      width: calc(100% - #{$sideBarWidth});
      transition: width 0.28s;
    }
  }
}
</style>

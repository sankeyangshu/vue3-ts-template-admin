<!--
 * @Description: 模版页面
 * @Author: 王振
 * @Date: 2022-03-04 14:56:45
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-09 13:13:20
-->
<template>
  <div class="app-wrapper">
    <!-- 左侧导航栏 开始 -->
    <sidebar class="sidebar-container" :style="{ backgroundColor: variables.menuBg }" />
    <!-- 左侧导航栏 结束 -->
    <div class="main-container">
      <!-- 顶部面包屑 开始 -->
      <div class="fixed-header">
        <navbar />
      </div>
      <!-- 顶部面包屑 结束 -->
      <!-- 内容区 开始 -->
      <AppMain />
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
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>

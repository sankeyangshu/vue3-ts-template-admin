<!--
 * @Description: 模版页面
 * @Author: 王振
 * @Date: 2022-03-04 14:56:45
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-16 13:02:10
-->
<template>
  <div class="app-wrapper" :class="[store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']">
    <!-- 左侧导航栏 开始 -->
    <sidebar class="sidebar-container" :style="{ backgroundColor: store.getters.cssVar.menuBg }" />
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
import {} from 'vue';
import { useStore } from 'vuex';

const store = useStore(); // 获取vuex实例
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
@import '@/styles/variables.module.scss';
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
  transition: width #{$sideBarDuration};
}

.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>

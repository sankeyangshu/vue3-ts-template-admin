<!--
 * @Description: 模版页面
 * @Author: 王振
 * @Date: 2022-03-04 14:56:45
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-21 18:06:02
-->
<template>
  <div class="app-wrapper" :class="[store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']">
    <!-- 左侧导航栏 开始 -->
    <sidebar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: store.getters.cssVar.menuBg }"
    />
    <!-- 左侧导航栏 结束 -->
    <div class="main-container">
      <!-- 顶部面包屑 开始 -->
      <div class="fixed-header">
        <navbar />
        <!-- 快捷标签 开始 -->
        <TagsView id="guide-tags"></TagsView>
        <!-- 快捷标签 结束 -->
      </div>
      <!-- 顶部面包屑 结束 -->
      <!-- 内容区 开始 -->
      <AppMain />
      <!-- 内容区 结束 -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue';
import { useStore } from 'vuex';
import Sidebar from './components/Sidebar/index.vue';
import Navbar from './components/Navbar.vue';
import AppMain from './components/AppMain.vue';
import TagsView from '@/components/TagsView/TagsView.vue';

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

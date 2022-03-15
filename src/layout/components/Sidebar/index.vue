<!--
 * @Description:
 * @Author: 王振
 * @Date: 2022-03-04 15:28:29
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-15 13:18:53
-->
<template>
  <div>
    <div class="logo-container">
      <el-avatar :size="logoHeight" shape="square" :src="logoUrl"></el-avatar>
      <h1 class="logo-title" v-if="store.getters.sidebarOpened">admin</h1>
    </div>
    <el-scrollbar>
      <SidebarMenu></SidebarMenu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import SidebarMenu from './SidebarMenu.vue';

const store = useStore(); // 获取vuex实例

const logoUrl = ref('https://cn.vuejs.org/images/logo.svg'); // logo图片地址
const logoHeight = 44; // logo高度
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>

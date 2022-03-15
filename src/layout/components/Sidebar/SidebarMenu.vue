<!--
 * @Description: 导航菜单组件
 * @Author: 王振
 * @Date: 2022-03-07 17:29:16
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-15 10:32:29
-->
<template>
  <el-menu
    :collapse="!store.getters.sidebarOpened"
    :default-active="activeMenu"
    :unique-opened="true"
    :background-color="store.getters.cssVar.menuBg"
    :text-color="store.getters.cssVar.menuText"
    :active-text-color="store.getters.cssVar.menuActiveText"
    router
  >
    <!-- 一级菜单 开始 -->
    <SidebarItem v-for="item in routes" :key="item.path" :route="item"></SidebarItem>
    <!-- 一级菜单 结束 -->
  </el-menu>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { filterRoutes, generateMenus } from '@/utils/route';
import { useStore } from 'vuex';
import SidebarItem from './SidebarItem.vue';

const router = useRouter(); // 获取路由实例
const store = useStore(); // 获取vuex实例

// 计算筛选路由
const routes = computed(() => {
  const fRoutes = filterRoutes(router.getRoutes());
  return generateMenus(fRoutes);
});

// 默认激活菜单
const route = useRoute(); // 获取路由携带的参数和路径
const activeMenu = computed(() => {
  const { path } = route;
  return path;
}); // 默认激活的菜单
</script>

<style lang="scss" scoped></style>

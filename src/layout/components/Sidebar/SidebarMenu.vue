<!--
 * @Description: 导航菜单组件
 * @Author: 王振
 * @Date: 2022-03-07 17:29:16
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-09 13:21:47
-->
<template>
  <el-menu
    :unique-opened="true"
    :background-color="store.getters.cssVar.menuBg"
    :text-color="store.getters.cssVar.menuText"
    :active-text-color="store.getters.cssVar.menuActiveText"
  >
    <!-- 一级菜单 开始 -->
    <SidebarItem v-for="item in routes" :key="item.path" :route="item"></SidebarItem>
    <!-- 一级菜单 结束 -->
  </el-menu>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { filterRoutes, generateMenus } from '@/utils/route';
import SidebarItem from './SidebarItem.vue';
import { useStore } from 'vuex';
import variables from '@/styles/variables.scss';
console.log('file: SidebarMenu.vue ~ line 28 ~ variables', variables);

const router = useRouter(); // 获取路由实例
const store = useStore(); // 获取vuex实例
console.log(store.getters);

const routes = computed(() => {
  const fRoutes = filterRoutes(router.getRoutes());
  return generateMenus(fRoutes);
}); // 计算筛选路由
</script>

<style lang="scss" scoped></style>

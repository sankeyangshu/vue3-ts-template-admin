<!--
 * @Description: 菜单组件
 * @Author: 王振
 * @Date: 2022-03-09 11:08:03
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-09 12:04:47
-->
<template>
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <MenuItem :title="route.meta.title" :icon="route.meta.icon"></MenuItem>
    </template>
    <!-- 循环渲染 -->
    <SidebarItem v-for="item in route.children" :key="item.path" :route="item"></SidebarItem>
  </el-sub-menu>
  <el-menu-item v-else :index="route.path">
    <MenuItem :title="route.meta.title" :icon="route.meta.icon"></MenuItem>
  </el-menu-item>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import MenuItem from './MenuItem.vue';
defineProps({
  route: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>

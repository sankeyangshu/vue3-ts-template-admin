<!--
 * @Description: 菜单路由树状组件
 * @Author: 王振
 * @Date: 2021-10-26 14:31:56
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-26 14:48:47
-->
<template>
  <template v-for="menu in userMenu">
    <el-sub-menu
      v-if="menu.children && menu.children.length > 0 && menu.children[0].menuType == 1"
      :key="menu._id"
    >
      <template #title>
        <i :class="menu.icon"></i>
        <span>{{ menu.menuName }}</span>
      </template>
      <tree-menu :userMenu="menu.children" />
    </el-sub-menu>
    <el-menu-item v-else-if="menu.menuType === 1" :index="menu.path" :key="menu._id">
      {{ menu.menuName }}
    </el-menu-item>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TreeMenu',
  props: {
    userMenu: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>

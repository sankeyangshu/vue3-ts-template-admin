<!--
 * @Description: 菜单组件
 * @Author: 王振
 * @Date: 2022-03-09 11:20:23
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-09 12:10:10
-->
<template>
  <el-icon>
    <slot :icon="icon"></slot>
  </el-icon>
  <span>{{ title }}</span>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps({
  title: {
    type: String,
    required: true,
  }, // 菜单名称
  icon: {
    type: String,
    required: true,
  }, // 菜单图标
});
</script>

<style lang="scss" scoped></style>

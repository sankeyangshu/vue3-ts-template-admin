<!--
 * @Description: 菜单组件
 * @Author: 王振
 * @Date: 2022-03-09 11:20:23
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-15 17:21:23
-->
<template>
  <el-icon v-if="icon.includes('el-icon')" class="sub-el-icon">
    <component :is="icon.substring(8)"></component>
  </el-icon>
  <svg-icon v-else :icon="icon"></svg-icon>
  <span>{{ generateTitle(title) }}</span>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { generateTitle } from '@/utils/i18n';

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

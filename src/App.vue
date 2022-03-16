<!--
 * @Description: 全局根组件
 * @Author: 王振
 * @Date: 2021-09-23 15:14:02
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-16 12:54:50
-->
<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { generateNewStyle, writeNewStyle } from '@/utils/theme';

/**
 * 动态换肤，避免刷新之后丢失动态换肤的效果
 */
const store = useStore(); // 获取vuex实例
generateNewStyle(store.getters.mainColor).then((newStyle) => {
  writeNewStyle(newStyle);
});
</script>

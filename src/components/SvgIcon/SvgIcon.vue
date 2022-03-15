<!--
 * @Description: svg图标组件
 * @Author: 王振
 * @Date: 2022-03-15 09:43:12
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-15 11:14:34
-->
<template>
  <!-- 外部图标 开始 -->
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    :class="className"
  ></div>
  <!-- 外部图标 结束 -->

  <!-- 内部图标 开始 -->
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
  <!-- 内部图标 结束 -->
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import { isExternal as external } from '@/utils/auth';

// 获取父组件传递的值
const props = defineProps({
  // icon 图标
  icon: {
    type: String,
    required: true,
  },
  // 图标类名
  className: {
    type: String,
    default: '',
  },
});

/**
 * 判断是否为外部图标
 */
const isExternal = computed(() => external(props.icon));

/**
 * 外部图标样式
 */
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`,
}));

/**
 * 项目内图标
 */
const iconName = computed(() => `#icon-${props.icon}`);
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>

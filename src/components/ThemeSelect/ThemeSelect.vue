<!--
 * @Description: 主题色切换组件
 * @Author: 王振
 * @Date: 2022-03-16 10:04:06
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-21 18:25:02
-->
<template>
  <el-dropdown v-bind="$attrs" trigger="click" class="theme" @command="handleSetTheme">
    <div>
      <el-tooltip :content="$t('msg.navBar.themeChange')">
        <span id="guide-theme">
          <svg-icon icon="change-theme" />
        </span>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">
          {{ $t('msg.theme.themeColorChange') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <!-- 展示弹出层 开始 -->
  <div>
    <SelectColor v-model="selectColorVisible"></SelectColor>
  </div>
  <!-- 展示弹出层 结束 -->
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SelectColor from './components/SelectColor.vue';

// 弹窗是否显示的默认值
const selectColorVisible = ref(false);

// 切换主题色
const handleSetTheme = () => {
  selectColorVisible.value = true;
};
</script>

<style lang="scss" scoped></style>

<!--
 * @Description: 引导页组件
 * @Author: 王振
 * @Date: 2022-03-21 17:43:44
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-21 19:16:55
-->
<template>
  <div>
    <el-tooltip :content="$t('msg.navBar.guide')">
      <span id="guide-start" @click="OnClickGuide">
        <svg-icon icon="guide" />
      </span>
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
import steps from './steps';

const i18n = useI18n(); // 初始化国际化实例

let driver: Driver | null = null; // 声明 driver 引导实例

onMounted(() => {
  driver = new Driver({
    // 禁止点击蒙版关闭
    allowClose: false,
    closeBtnText: i18n.t('msg.guide.close'),
    nextBtnText: i18n.t('msg.guide.next'),
    prevBtnText: i18n.t('msg.guide.prev'),
  });
});

/**
 * 点击引导
 */
const OnClickGuide = () => {
  if (driver) {
    driver.defineSteps(steps(i18n));
    driver.start();
  }
};
</script>

<style lang="scss" scoped></style>

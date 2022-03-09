<!--
 * @Description:
 * @Author: 王振
 * @Date: 2022-03-04 15:27:27
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-08 17:07:53
-->
<template>
  <div class="app__main">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue';
</script>

<style lang="scss" scoped>
.app__main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 61px 20px 20px;
  box-sizing: border-box;
}
</style>

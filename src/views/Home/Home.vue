<!--
 * @Description: 默认模版
 * @Author: 王振
 * @Date: 2021-09-23 16:04:42
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-26 10:09:46
-->
<template>
  <div class="layout">
    <div class="layout__nav"></div>
    <div class="layout__content">
      <div class="content__nav">
        <div class="content__nav__bread">面包屑</div>
        <div class="content__nav__user">用户</div>
      </div>
      <div class="content__wrap">
        <div class="main__page">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home',
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  &__nav {
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
    color: #fff;
    overflow-y: auto;
    transition: width 0.5s;
  }

  &__content {
    margin-left: 200px;
    .content__nav {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;
    }

    .content__wrap {
      height: calc(100vh - 50px);
      background: #eef0f3;
      padding: 20px;
      .main__page {
        height: 100%;
        background-color: #fff;
      }
    }
  }
}
</style>

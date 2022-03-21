<!--
 * @Description:
 * @Author: 王振
 * @Date: 2022-03-04 15:27:38
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-21 18:13:42
-->
<template>
  <div>
    <div class="navbar">
      <!-- 收缩图标 开始 -->
      <hamburger class="navbar__hamburger"></hamburger>
      <!-- 收缩图标 结束 -->

      <!-- 面包屑 开始 -->
      <breadcrumb id="guide-breadcrumb" class="navbar__breadcrumb"></breadcrumb>
      <!-- 面包屑 结束 -->

      <div class="navbar__right">
        <Guide class="navbar__right__item hover__effect"></Guide>
        <HeaderSearch class="navbar__right__item hover__effect"></HeaderSearch>
        <ScreenFull class="navbar__right__item hover__effect"></ScreenFull>
        <ThemeSelect class="navbar__right__item hover__effect"></ThemeSelect>
        <LangSelect class="navbar__right__item hover__effect"></LangSelect>
        <!-- 头像 开始 -->
        <el-dropdown class="avatar" trigger="click">
          <div class="avatar__wrapper">
            <el-avatar
              shape="square"
              :size="40"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            ></el-avatar>
            <el-icon :size="22"><tools /></el-icon>
          </div>
          <template #dropdown>
            <el-dropdown-menu class="avatar__dropdown">
              <router-link to="/">
                <el-dropdown-item> {{ $t('msg.navBar.home') }} </el-dropdown-item>
              </router-link>
              <el-dropdown-item divided @click="OnClickLogout">
                {{ $t('msg.navBar.logout') }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <!-- 头像 结束 -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import Hamburger from '@/components/Hamburger/Hamburger.vue';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.vue';
import LangSelect from '@/components/LangSelect/LangSelect.vue';
import ThemeSelect from '@/components/ThemeSelect/ThemeSelect.vue';
import ScreenFull from '@/components/ScreenFull/ScreenFull.vue';
import HeaderSearch from '@/components/HeaderSearch/HeaderSearch.vue';
import Guide from '@/components/Guide/Guide.vue';

const store = useStore(); // 获取store实例

// 用户退出登录
const OnClickLogout = () => {
  store.dispatch('user/logout');
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  &__hamburger {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer; // cursor 属性规定要显示的光标的类型（形状）。
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  &__breadcrumb {
    float: left;
  }

  &__right {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;

    ::v-deep &__item {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover__effect {
        cursor: pointer;
      }
    }

    ::v-deep .avatar {
      cursor: pointer;
      &__wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>

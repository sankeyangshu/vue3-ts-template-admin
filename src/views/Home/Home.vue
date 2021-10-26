<!--
 * @Description: 默认模版
 * @Author: 王振
 * @Date: 2021-09-23 16:04:42
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-26 14:56:12
-->
<template>
  <div class="layout">
    <div :class="['layout__nav', isCollapse ? 'fold' : 'unfold']">
      <!-- 系统logo 开始 -->
      <div class="layout__nav__logo">
        <img src="../../assets/logo.png" alt="" />
        <span v-if="!isCollapse">后台管理系统</span>
      </div>
      <!-- 系统logo 结束 -->

      <!-- 导航菜单 开始 -->
      <el-menu
        default-active="2"
        router
        background-color="#001529"
        text-color="#fff"
        :collapse="isCollapse"
        class="layout__nav__menu"
      >
        <tree-menu :userMenu="userMenu"></tree-menu>
      </el-menu>
      <!-- 导航菜单 结束 -->
    </div>
    <div :class="['layout__content', isCollapse ? 'fold' : 'unfold']">
      <div class="content__nav">
        <div class="content__nav__left">
          <div class="menu__fold" @click="OnClickToggle">
            <i class="el-icon-s-fold"></i>
          </div>
          <div class="bread">
            <bread-crumb></bread-crumb>
          </div>
        </div>
        <div class="content__nav__right">
          <el-badge :is-dot="true" type="danger" class="notice">
            <i class="el-icon-bell"></i>
          </el-badge>
          <el-dropdown @command="OnCommandLogout">
            <span class="user__link"> {{ userInfo.userName }}<i class="el-icon--right"></i> </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="email">邮箱：{{ userInfo.userEmail }}</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
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
import BreadCrumb from '@/components/BreadCrumb.vue';
import TreeMenu from '@/components/TreeMenu.vue';
import { defineComponent, reactive, ref } from 'vue';

// 控制导航菜单展开和收缩
const useIsShowCollapse = () => {
  const isCollapse = ref<boolean>(false); // 控制菜单的展开和收缩
  const OnClickToggle = () => {
    isCollapse.value = !isCollapse.value;
  };
  return {
    isCollapse,
    OnClickToggle,
  };
};

export default defineComponent({
  name: 'Home',
  components: { TreeMenu, BreadCrumb },
  setup() {
    const userInfo = reactive({
      userName: 'jack',
      userEmail: 'jack@admin.com',
    });
    const { isCollapse, OnClickToggle } = useIsShowCollapse(); // 控制导航菜单展开和收缩
    return { userInfo, isCollapse, OnClickToggle };
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
    transition: width 0.5s;
    &__logo {
      height: 50px;
      display: flex;
      align-items: center;
      font-size: 18px;
      img {
        width: 32px;
        height: 32px;
        margin: 0 16px;
      }
    }
    &__menu {
      height: calc(100vh - 50px);
      border-right: none;
    }
    // 合并
    &.fold {
      width: 64px;
    }
    // 展开
    &.unfold {
      width: 200px;
    }
  }

  &__content {
    margin-left: 200px;
    // 合并
    &.fold {
      margin-left: 64px;
    }
    // 展开
    &.unfold {
      margin-left: 200px;
    }
    .content__nav {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;
      &__left {
        display: flex;
        align-items: center;
        .menu__fold {
          margin-right: 15px;
          font-size: 18px;
        }
      }
      &__right {
        .notice {
          line-height: 30px;
          margin-right: 15px;
        }
        .user__link {
          cursor: pointer;
          color: #409eff;
        }
      }
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

<!--
 * @Description:
 * @Author: 王振
 * @Date: 2022-03-04 15:27:38
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-08 17:24:07
-->
<template>
  <div>
    <div class="navbar">
      <div class="navbar__right">
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
                <el-dropdown-item> 首页 </el-dropdown-item>
              </router-link>
              <el-dropdown-item divided @click="OnClickLogout"> 退出登录 </el-dropdown-item>
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
import { Tools } from '@element-plus/icons-vue';

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

  &__right {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
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

<!--
 * @Description: 面包屑组件
 * @Author: 王振
 * @Date: 2022-03-15 14:11:03
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-15 15:01:18
-->
<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="item.path">
        <!-- 不可点击的面包屑 -->
        <span class="no-redirect" v-if="index === breadcrumbData.length - 1">
          {{ item.meta.title }}
        </span>
        <!-- 可点击的面包屑 -->
        <span class="redirect" v-else @click="OnClicLink(item)">{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

// 获取路由实例
const router = useRouter();
const route = useRoute();

/**
 * 生成数组数据
 */
const breadcrumbData = ref<any>([]); // 面包屑数组数据
const getBreadcrumbData = () => {
  // 当前路由的标准化路由记录
  breadcrumbData.value = route.matched.filter((item) => item.meta && item.meta.title);
};

// 监听路由变化
// https://v3.cn.vuejs.org/api/instance-methods.html#watch
watch(
  route,
  () => {
    getBreadcrumbData();
  },
  {
    immediate: true, // 在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调
  }
);

/**
 * 点击跳转路由事件
 */
const OnClicLink = (item: any) => {
  router.push(item.path);
};

// 将来需要进行主题替换，所以这里获取下动态样式
const store = useStore(); // 获取vuex实例
const linkHoverColor = ref(store.getters.cssVar.menuBg);
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .redirect {
    color: #666;
    font-weight: 600;
  }

  .redirect:hover {
    // 将来需要进行主题替换，所以这里不去写死样式
    color: v-bind(linkHoverColor);
  }

  ::v-deep .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>

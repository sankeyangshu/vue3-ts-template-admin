<!--
 * @Description: 内容区组件
 * @Author: 王振
 * @Date: 2022-03-04 15:27:27
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-16 18:32:01
-->
<template>
  <div class="app-main">
    <!-- 带有切换动画，并且具备组件缓存 https://router.vuejs.org/zh/guide/advanced/transitions.html#%E5%8D%95%E4%B8%AA%E8%B7%AF%E7%94%B1%E7%9A%84%E8%BF%87%E6%B8%A1 -->
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router';
import { isTags } from '@/utils/tags';
import { useStore } from 'vuex';
import { generateTitle, watchSwitchLang } from '@/utils/i18n';

/**
 * @description: 生成title
 * @param {RouteLocationNormalizedLoaded} route 路由参数
 * @return {string} title 名称
 */
const getTitle = (route: RouteLocationNormalizedLoaded) => {
  let title = ''; // 标签名称

  if (!route.meta) {
    const pathArr = route.path.split('/');
    title = pathArr[pathArr.length - 1]; // 获取数组中最后一个值
  } else {
    title = generateTitle(route.meta.title as string);
  }

  return title;
};

const store = useStore(); // 获取vuex实例
const route = useRoute(); // 获取路由实例携带的参数
watch(
  route,
  (to, from) => {
    // 判断路由是否需要被保存
    if (!isTags(to.path)) return;
    const { fullPath, meta, name, params, path, query } = to;
    store.commit('app/SET_TAGSVIEWLIST', {
      fullPath,
      meta,
      name,
      params,
      path,
      query,
      title: getTitle(to),
    });
  },
  {
    immediate: true,
  }
); // 监听路由,触发回调

// 国际化-监听语言切换，修改快捷标签
watchSwitchLang(() => {
  store.getters.tagsViewList.forEach((route: RouteLocationNormalizedLoaded, index: number) => {
    store.commit('app/SET_CHANGETAGSVIEW', {
      index,
      tag: {
        ...route,
        title: getTitle(route),
      },
    });
  });
});
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px - 43px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 104px 20px 20px 20px;
  box-sizing: border-box;
}
</style>

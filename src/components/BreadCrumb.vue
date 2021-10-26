<!--
 * @Description: 面包屑组件
 * @Author: 王振
 * @Date: 2021-10-26 14:52:37
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-26 15:04:24
-->
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in breadList" :key="item.path">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'BreadCrumb',
  setup() {
    const route = useRoute();
    const breadList = computed(() => {
      return route.matched;
    }); // 面包屑列表
    return { breadList };
  },
});
</script>

<style lang="scss" scoped></style>

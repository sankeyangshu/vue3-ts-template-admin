<!--
 * @Description: 用户管理组件
 * @Author: 王振
 * @Date: 2022-03-08 15:42:56
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-22 20:32:50
-->
<template>
  <div class="user__manage__container">
    <el-card class="header">
      <div>
        <el-button type="primary" @click="OnClickImportExcel">
          {{ $t('msg.excel.importExcel') }}</el-button
        >
        <el-button type="success">
          {{ $t('msg.excel.exportExcel') }}
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter(); // 获取路由实例

/**
 * excel 导入点击事件
 */
const OnClickImportExcel = () => {
  router.push('/user/import');
};

/**
 * 返回用户列表之后，用户列表数据不会自动刷新：
 * 出现该问题的原因是因为：appmain 中使用 keepAlive 进行了组件缓存。
 * 解决的方案也很简单，
 * 只需要：监听 [onActivated](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#activated) 事件
 * 重新获取数据即可。
 */
// 处理导入用户后数据不重新加载的问题
// onActivated(getListData); // getListData方法获取员工列表数据
</script>

<style lang="scss" scoped>
.user__manage__container {
  .header {
    margin-bottom: 22px;
    text-align: right;
  }
}
</style>

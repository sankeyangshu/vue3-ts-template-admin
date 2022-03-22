<!--
 * @Description: 导入页面
 * @Author: 王振
 * @Date: 2022-03-08 15:53:42
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-22 20:29:45
-->
<template>
  <UploadExcel :onSuccess="onSuccess"></UploadExcel>
</template>

<script lang="ts" setup>
import { CommonObject } from '@/types';
import { USER_RELATIONS, formatDate } from './utils';
import { ElMessage } from 'element-plus';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { postuserBatchImportAPI } from '@/api/user';
import UploadExcel from '@/components/UploadExcel/UploadExcel.vue';

/**
 * 解析后Excel表格数据类型
 */
interface excelDataType {
  header: string[];
  results: CommonObject<string>[];
}

const i18n = useI18n(); // 获取国际化实例
const router = useRouter(); // 获取路由实例

/**
 * 数据解析成功之后的回调
 */
const onSuccess = async ({ header, results }: excelDataType) => {
  const updateData = generateData(results);
  await postuserBatchImportAPI(updateData);
  ElMessage.success({
    message: results.length + i18n.t('msg.excel.importSuccess'),
    type: 'success',
  });
  router.push('/user/manage');
};

/**
 * @description: 筛选数据
 * @param {*} results 数据
 * @return {*}
 */
const generateData = (results: CommonObject<string>[]) => {
  const arr: CommonObject<string>[] = [];
  results.forEach((item) => {
    const userInfo: CommonObject<string> = {};
    Object.keys(item).forEach((key) => {
      if (USER_RELATIONS[key] === 'openTime') {
        userInfo[USER_RELATIONS[key]] = formatDate(Number(item[key]));
        return;
      }
      userInfo[USER_RELATIONS[key]] = item[key];
    });
    arr.push(userInfo);
  });

  return arr;
};
</script>

<style lang="scss" scoped></style>

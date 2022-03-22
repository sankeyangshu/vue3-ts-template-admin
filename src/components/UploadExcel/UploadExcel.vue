<!--
 * @Description: Excel导入组件
 * @Author: 王振
 * @Date: 2022-03-22 18:51:17
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-22 19:44:53
-->
<template>
  <div class="upload-excel">
    <div class="btn-upload">
      <el-button :loading="loading" type="primary" @click="handleUpload">
        {{ $t('msg.uploadExcel.upload') }}
      </el-button>
    </div>
    <input
      ref="excelUploadInput"
      class="excel-upload-input"
      type="file"
      accept=".xlsx, .xls"
      @change="handleChange"
    />
    <!-- https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API -->
    <div
      class="drop"
      @drop.stop.prevent="handleDrop"
      @dragover.stop.prevent="handleDragover"
      @dragenter.stop.prevent="handleDragover"
    >
      <i class="el-icon-upload" />
      <span>{{ $t('msg.uploadExcel.drop') }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';
import { getHeaderRow, isExcel } from './utils';
import { ElMessage } from 'element-plus';
import XLSX from 'xlsx';

// 父组件传递的值
const props = defineProps({
  // 上传前回调
  beforeUpload: Function,
  // 成功回调
  onSuccess: Function,
});

/**
 * @description: 拖拽文本释放时触发
 * @param {any} e 事件节点
 */
const handleDrop = (e: any) => {
  // 上传中跳过
  if (loading.value) return;
  const files = e.dataTransfer.files;
  if (files.length !== 1) {
    ElMessage.error('必须要有一个文件');
    return;
  }
  const rawFile = files[0];
  if (!isExcel(rawFile)) {
    ElMessage.error('文件必须是 .xlsx, .xls, .csv 格式');
    return false;
  }
  // 触发上传事件
  upload(rawFile);
};

/**
 * @description: 拖拽悬停时触发
 * @param {*} e 事件节点
 */
const handleDragover = (e: any) => {
  // https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer/dropEffect
  // 在新位置生成源项的副本
  e.dataTransfer.dropEffect = 'copy';
};

/**
 * 用户上传文件操作逻辑
 */
const loading = ref(false); // 按钮等待状态
const excelUploadInput = ref(); // 上传组件节点

/**
 * 点击上传触发
 */
const handleUpload = () => {
  excelUploadInput.value.click();
};

/**
 * @description: 用户上传
 * @param {Event} e 事件节点
 */
const handleChange = (e: Event) => {
  const files = (e.target as any).files;
  const rawFile = files[0]; // 只使用 files[0]
  if (!rawFile) return;
  upload(rawFile);
};

/**
 * @description: 触发上传事件
 * @param {any} rawFile 文件
 */
const upload = (rawFile: any) => {
  excelUploadInput.value.value = null;
  // 如果没有指定上传前回调的话
  if (!props.beforeUpload) {
    readerData(rawFile);
    return;
  }
  // 如果指定了上传前回调，那么只有返回 true 才会执行后续操作
  const before = props.beforeUpload(rawFile);
  if (before) {
    readerData(rawFile);
  }
};

/**
 * @description: 读取用户上传的数据
 * @param {any} rawFile
 */
const readerData = (rawFile: any) => {
  loading.value = true;
  return new Promise<void>((resolve, reject) => {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader
    const reader = new FileReader();
    // 该事件在读取操作完成时触发
    // https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/onload
    reader.onload = (e) => {
      // 1. 获取解析到的数据
      const data = e.target?.result;
      // 2. 利用 XLSX 对数据进行解析
      const workbook = XLSX.read(data, { type: 'array' });
      // 3. 获取第一张表格(工作簿)名称
      const firstSheetName = workbook.SheetNames[0];
      // 4. 只读取 Sheet1（第一张表格）的数据
      const worksheet = workbook.Sheets[firstSheetName];
      // 5. 解析数据表头
      const header = getHeaderRow(worksheet);
      // 6. 解析数据体
      const results = XLSX.utils.sheet_to_json(worksheet);
      // 7. 传入解析之后的数据
      generateData({ header, results });
      // 8. loading 处理
      loading.value = false;
      // 9. 异步完成
      resolve();
    };
    // 启动读取指定的 Blob 或 File 内容
    reader.readAsArrayBuffer(rawFile);
  });
};

/**
 * @description: 根据导入内容，生成数据
 * @param {any} excelData
 */
const generateData = (excelData: any) => {
  props.onSuccess && props.onSuccess(excelData);
};
</script>

<style lang="scss" scoped>
.upload-excel {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  .excel-upload-input {
    display: none;
    z-index: -9999;
  }
  .btn-upload,
  .drop {
    border: 1px dashed #bbb;
    width: 350px;
    height: 160px;
    text-align: center;
    line-height: 160px;
  }
  .drop {
    line-height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #bbb;
    i {
      font-size: 60px;
      display: block;
    }
  }
}
</style>

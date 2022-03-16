<!--
 * @Description: 颜色选择组件
 * @Author: 王振
 * @Date: 2022-03-16 10:12:36
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-16 12:44:50
-->
<template>
  <el-dialog
    :title="$t('msg.universal.title')"
    :model-value="modelValue"
    width="22%"
    @close="closed"
  >
    <div class="center">
      <p class="title">{{ $t('msg.theme.themeColorChange') }}</p>
      <el-color-picker v-model="mColor" :predefine="predefineColors"></el-color-picker>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.universal.cancel') }}</el-button>
        <el-button type="primary" @click="comfirm">
          {{ $t('msg.universal.confirm') }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref } from 'vue';
import { useStore } from 'vuex';
import { generateNewStyle, writeNewStyle } from '@/utils/theme';

// 父组件传递的值
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

// 向父组件传递方法
const emits = defineEmits(['update:modelValue']);

// 获取vuex实例
const store = useStore();

// 预定义色值
const predefineColors = [
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
];

// 默认色值-主题色
const mColor = ref(store.getters.mainColor);

/**
 * 关闭dialog
 */
const closed = () => {
  emits('update:modelValue', false);
};

/**
 * 保存主题色
 */
const comfirm = async () => {
  //  获取样式表
  const newStyleText = await generateNewStyle(mColor.value);
  // 写入最新样式表
  writeNewStyle(newStyleText);
  // 保存最新的主题色
  store.commit('app/SET_MAINCOLOR', mColor.value);
  // 关闭 dialog
  closed();
};
</script>

<style lang="scss" scoped>
.center {
  text-align: center;
  .title {
    margin-bottom: 12px;
  }
}
</style>

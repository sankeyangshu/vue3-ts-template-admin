<!--
 * @Description: 国际化语言选择组件
 * @Author: 王振
 * @Date: 2022-03-15 15:23:37
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-21 18:24:52
-->
<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div>
      <el-tooltip :content="$t('msg.navBar.lang')" :effect="effect">
        <span id="guide-lang">
          <svg-icon icon="language" />
        </span>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh"> 中文 </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command="en"> English </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { ElMessage } from 'element-plus';

defineProps({
  effect: {
    type: String,
    default: 'dark',
    validator: function (value: string) {
      // 这个值必须匹配下列字符串中的一个
      return ['dark', 'light'].indexOf(value) !== -1;
    },
  },
}); // 获取父组件传递的值

const store = useStore(); // 获取store实例
const language = computed(() => store.getters.language);

// 切换语言的方法
const i18n = useI18n();
const handleSetLanguage = (lang: string) => {
  i18n.locale.value = lang;
  store.commit('app/SET_LANGUAGE', lang);
  ElMessage.success(i18n.t('msg.toast.switchLangSuccess'));
};
</script>

<style lang="scss" scoped></style>

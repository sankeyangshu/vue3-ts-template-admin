<!--
 * @Description: 快递标签右键菜单
 * @Author: 王振
 * @Date: 2022-03-16 17:47:29
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-16 18:18:44
-->
<template>
  <ul class="context__menu__container">
    <li @click="OnClickRefresh">
      {{ $t('msg.tagsView.refresh') }}
    </li>
    <li @click="OnClickCloseRight">
      {{ $t('msg.tagsView.closeRight') }}
    </li>
    <li @click="OnClickCloseOther">
      {{ $t('msg.tagsView.closeOther') }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const props = defineProps({
  index: {
    type: Number,
    required: true,
  }, // 下标索引
});

const router = useRouter(); // 获取路由实例
const store = useStore(); // 获取vuex实例

/**
 * @description: 刷新
 */
const OnClickRefresh = () => {
  router.go(0); // 通过路由来做到刷新功能
};

/**
 * @description: 关闭右侧标签
 */
const OnClickCloseRight = () => {
  store.commit('app/SET_REMOVETAGSVIEW', {
    type: 'right',
    index: props.index,
  });
};

/**
 * @description: 关闭其他标签
 */
const OnClickCloseOther = () => {
  store.commit('app/SET_REMOVETAGSVIEW', {
    type: 'other',
    index: props.index,
  });
};
</script>

<style lang="scss" scoped>
.context__menu__container {
  position: fixed;
  background: #fff;
  z-index: 3000;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>

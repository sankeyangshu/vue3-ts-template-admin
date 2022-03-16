<!--
 * @Description: 快捷标签
 * @Author: 王振
 * @Date: 2022-03-16 16:56:38
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-16 18:26:44
-->
<template>
  <div class="tags__view__container">
    <router-link
      v-for="(tag, index) in store.getters.tagsViewList"
      :key="tag.fullPath"
      class="tags__view__item"
      :class="isActive(tag) ? 'active' : ''"
      :to="{ path: tag.fullPath }"
      :style="{
        backgroundColor: isActive(tag) ? store.getters.cssVar.menuBg : '',
        borderColor: isActive(tag) ? store.getters.cssVar.menuBg : '',
      }"
      @contextmenu.prevent="openMenu($event, index)"
    >
      {{ tag.title }}
      <el-icon v-show="!isActive(tag)" @click.prevent.stop="onClickClose(index)">
        <close class="el-icon-close" />
      </el-icon>
    </router-link>

    <ContextMenu v-show="visible" :style="menuStyle" :index="selectIndex"></ContextMenu>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import ContextMenu from './ContextMenu.vue';

/**
 * 右键菜单样式类型
 */
interface menuStyleType {
  left: number | string;
  top: number | string;
}

const store = useStore(); // 获取vuex实例
const route = useRoute(); // 获取路由参数

/**
 * @description: 是否被选中
 * @param {any} tag 快捷标签
 * @return {boolean} 选中结果
 */
const isActive = (tag: any) => {
  return tag.path === route.path;
};

/**
 * @description: 关闭快捷标签的点击事件
 * @param {number} index 数组下标索引
 * @return {*}
 */
const onClickClose = (index: number) => {
  store.commit('app/SET_REMOVETAGSVIEW', {
    type: 'index',
    index,
  });
};

/**
 * 鼠标右键点击事件逻辑
 */
const visible = ref(false); // 是否显示右键菜单
const menuStyle = reactive<menuStyleType>({
  left: 0,
  top: 0,
}); // 菜单位置
const selectIndex = ref(0); // 选中的菜单索引
/**
 * @description: 鼠标右键点击事件s
 * @param {MouseEvent} e 事件
 * @param {number} index 数组下标索引
 * @return {*}
 */
const openMenu = (e: MouseEvent, index: number) => {
  const { x, y } = e; // 从鼠标事件中获取点击位置
  menuStyle.left = x + 'px'; // 修改菜单位置
  menuStyle.top = y + 'px';
  selectIndex.value = index;
  visible.value = true; // 显示右键菜单
};

/**
 * 监听右侧菜单关闭事件逻辑
 */
const closeMenu = () => {
  visible.value = false;
};
watch(visible, (val) => {
  if (val) {
    document.body.addEventListener('click', closeMenu);
  } else {
    document.body.removeEventListener('click', closeMenu);
  }
});
</script>

<style lang="scss" scoped>
.tags__view__container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags__view__item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      color: #fff;
      &::before {
        content: '';
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 4px;
      }
    }
    // close 按钮
    .el-icon-close {
      width: 16px;
      height: 16px;
      line-height: 10px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      transform: translateY(20%);
      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>

<!--
 * @Description: 搜索组件
 * @Author: 王振
 * @Date: 2022-03-16 13:35:32
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-21 18:33:12
-->
<template>
  <div id="guide-search" class="header__search" :class="{ show: isShow }">
    <span @click.stop="OnClickShow">
      <svg-icon className="search-icon" icon="search" />
    </span>
    <el-select
      v-model="search"
      placeholder="search"
      ref="headerSearchSelectRef"
      class="header__search__select"
      filterable
      default-first-option
      remote
      :remote-method="querySearch"
      @change="OnChangeSelect"
    >
      <el-option
        v-for="option in searchOptions"
        :key="option.item.path"
        :label="option.item.title.join('>')"
        :value="option.item"
      ></el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { filterRoutes } from '@/utils/route';
import { useRouter } from 'vue-router';
import { generateRoutes, filterRouteType } from './FuseData';
import { watchSwitchLang } from '@/utils/i18n';
import Fuse from 'fuse.js'; // https://fusejs.io/ fuse.js文档

// 数据源
const router = useRouter(); // 获取路由实例
let searchPool = computed(() => {
  const routes = filterRoutes(router.getRoutes());
  return generateRoutes(routes);
});

/**
 * 搜索库相关
 */
let fuse: Fuse<filterRouteType>;
const initFuse = (searchPool: any) => {
  fuse = new Fuse(searchPool, {
    // 是否按优先级进行排序
    shouldSort: true,
    // 匹配长度超过这个值的才会被认为是匹配的
    minMatchCharLength: 1,
    // 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。
    // name：搜索的键
    // weight：对应的权重
    keys: [
      {
        name: 'title',
        weight: 0.7,
      },
      {
        name: 'path',
        weight: 0.3,
      },
    ],
  });
};
initFuse(searchPool.value); // 初始化fuse

// 控制搜索框显示
const isShow = ref(false);
const OnClickShow = () => {
  isShow.value = !isShow.value;
};

watch(isShow, (val) => {
  if (val) {
    document.body.addEventListener('click', onClose);
  } else {
    document.body.removeEventListener('click', onClose);
  }
}); // 点击页面主体关闭搜索框

// 关闭事件
const headerSearchSelectRef = ref();
const onClose = () => {
  headerSearchSelectRef.value.blur();
  isShow.value = false;
  searchOptions.value = [];
};

// 搜索关键词
const search = ref('');

// 搜索方法
const searchOptions = ref<Fuse.FuseResult<filterRouteType>[]>([]); // 搜索结果
const querySearch = (query: string) => {
  if (query !== '') {
    searchOptions.value = fuse.search(query);
  } else {
    searchOptions.value = [];
  }
};

/**
 * @description: 选中 option 回调方法
 * @param {filterRouteType} val 路由对象
 * @return {*} 跳转到具体页面
 */
const OnChangeSelect = (val: filterRouteType) => {
  search.value = val.title.join('>');
  router.push(val.path);
};

// 监听语言变化
watchSwitchLang(() => {
  searchPool = computed(() => {
    const routes = filterRoutes(router.getRoutes());
    return generateRoutes(routes);
  });
  initFuse(searchPool.value);
});
</script>

<style lang="scss" scoped>
.header__search {
  font-size: 0 !important;
  ::v-deep .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header__search__select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
  &.show {
    .header__search__select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>

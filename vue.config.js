/*
 * @Description: vue 配置文件
 * @Author: 王振
 * @Date: 2022-03-09 10:48:58
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-09 13:23:03
 */

module.exports = {
  // webpack 配置文件
  configureWebpack: {
    resolve: {
      alias: {
        path: require.resolve('path-browserify'),
      },
    },
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `@import "@/style/variables.scss";`,
  //     },
  //   },
  // },
};

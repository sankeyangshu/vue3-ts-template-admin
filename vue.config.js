/*
 * @Description: vue 配置文件
 * @Author: 王振
 * @Date: 2022-03-09 10:48:58
 * @LastEditors: 王振
 * @LastEditTime: 2022-03-15 10:18:01
 */
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

// https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
// vue 配置文档

module.exports = {
  // webpack 配置文件
  configureWebpack: {
    resolve: {
      alias: {
        path: require.resolve('path-browserify'),
      },
    },
  },
  chainWebpack(config) {
    // 设置 svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();
  },
};

/*
 * @Author: Vhen
 * @Date: 2020-10-19 09:24:20
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-19 10:18:34
 * @Description: 
 */
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')

module.exports=[
  new HtmlWebpackTagsPlugin({
    links: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css'],
    scripts: [
      {
        path: 'https://cdn.jsdelivr.net/npm/vue',
        external: {
          packageName: 'vue',
          variableName: 'Vue',
        },
      },
      {
        path: 'https://unpkg.com/vue-router/dist/vue-router.js',
        external: {
          packageName: 'vue-router',
          variableName: 'VueRouter',
        },
      },
      {
        path: 'https://unpkg.com/element-ui/lib/index.js',
        external: {
          packageName: 'element-ui',
          variableName: 'ELEMENT',
        },
      },
      {
        path: 'https://unpkg.com/vuex@3.5.1/dist/vuex.js',
        external: {
          packageName: 'vuex',
          variableName: 'Vuex ',
        },
      },
      {
        path: 'https://cdn.jsdelivr.net/npm/tinymce@5.5.1/tinymce.min.js',
        external: {
          packageName: 'tinymce',
          variableName: 'tinymce',
        },
      }
    ],
    publicPath: false,
  }),
]
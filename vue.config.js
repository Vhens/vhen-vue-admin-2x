/*
 * @Author: Vhen
 * @Date: 2020-10-19 09:18:21
 * @LastEditors: Vhen
 * @LastEditTime: 2020-11-11 13:46:48
 * @Description:
 */

const path = require('path')

const plugins = require('./config/plugins')

function resolve(dir) {
  return path.join(__dirname, dir)
}

function gitIp() {
  var interfaces = require('os').networkInterfaces()
  for (var devName in interfaces) {
    var iface = interfaces[devName]
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
}

const port = process.env.port || process.env.npm_config_port || 9530 // dev port
const pageTitle =  'vue-admin-2x' // page title

module.exports = {
  runtimeCompiler: true,
  publicPath: '/', // 公共路径
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    disableHostCheck: true,
    proxy: {
      '/*': {
        target: process.env.VUE_APP_URL, //请求的目标地址 process.env.VUE_APP_URL
        changeOrigin: true,
        ws: false,
        secure: false,
        pathRewrite: {}
      }
    },
    // before: require('./mock/mock-server.js')
  },
  configureWebpack: {
    name: pageTitle,
    resolve: {
      modules: [
        // 优化模块查找路径
        path.resolve('src'),
        path.resolve('node_modules'), // 指定node_modules所在位置 当你import 第三方模块时 直接从这个路径下搜索寻找
      ],
    },
    plugins:  plugins
  },

  chainWebpack: (config) => {
    // 删除其他loader对svg文件的编译
    config.module.rules.delete('svg')
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()

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
      .end()

    /* 添加分析工具*/
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end();
        config.plugins.delete('prefetch')
      }
    }
  },
}

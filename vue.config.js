// vue.config.js
let path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {

  // axios域代理，解决axios跨域问题
  publicPath: process.env.NODE_ENV === 'production' ? '/wisdompole/' : '/',
  devServer: {
    port: 8777,
    proxy: { // 测试代理打包时应屏蔽
      '/api': {
        // target: 'localhost:8888',
        target: 'http://10.41.97.48:8888',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
      .set('api', resolve('src/api'))
  },
  css: {
    extract: false
  }
}

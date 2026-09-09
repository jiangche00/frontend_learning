const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: false,
  configureWebpack: {
    resolve: {
      alias: {
        axios: path.resolve(__dirname, 'node_modules/axios/dist/browser/axios.cjs'),
      },
    },
  },
})
module.exports = {
  chainWebpack: config => {
    // 发布模式
    config.set('externals', {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      axios: 'axios',
      'highlight.js': 'highlight.js',
      yaml: 'js-yaml',
      "mavon-editor": "MavonEditor",
      moment: 'moment',
      marked: 'marked',
      esprima: 'esprima'
    })
  }
}

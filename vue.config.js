module.exports = {
  pluginOptions: {
    quasar: {
      theme: 'mat'
    }
  },
  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar-framework[\\\/]/
  ],
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/global.scss";
        `
      }
    }
  }
}

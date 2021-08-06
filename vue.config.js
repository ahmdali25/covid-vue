module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "INFOCOV.ID";
            return args;
        })
  },
  devServer: {
    proxy: 'https://infocov.netlify.app',
  }
}
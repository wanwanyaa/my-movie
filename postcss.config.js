module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 100, // 配置转换的基准单位
      propList: ['*'], // 配置需要转化rem的css属性
      selectorBlackList: ['html']
    }
  }
}

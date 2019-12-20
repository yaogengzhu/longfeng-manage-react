# longfeng-manage

### 本项目技能要求 
- react
- typescript
- jss
- mobx
- scss

### 开发前准备
- 需要安装 react tyscript jss mobx 
- 可以使用react create-app 构建一个脚手架

### 开发过程中，可能会遇到的问题 
- 如果遇到主题配置不成功的问题怎么办？ 可以参考以下方案 
> 新建一个config-overrides.js 文件
```js
const path = require('path')
const { fixBabelImports, addLessLoader, addWebpackAlias} = require('customize-cra')
const rewireCssModules = require("react-app-rewire-css-modules")
// const them = require('./src/them')
// module.exports = override(
//     fixBabelImports('import', {
//       libraryName: 'antd',
//       libraryDirectory: 'es',
//      style: true,
//     }),
//     addLessLoader({
//     javascriptEnabled: true,
//     modifyVars: { '@primary-color': '#1DA57A' },
//   }),
// )

module.exports = function override(config, env) {
    config.output.publicPath = './'
    config = addWebpackAlias({
        "@": path.resolve(__dirname, "src")
    })(config)
    config = rewireCssModules(config, env)

    config = fixBabelImports('import', {
        libraryName: 'antd',
        style: true
    })(config)

    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A', '@brand-primary': '#1DA57A' }
    })(config, env)
    return config
}
```

## 注意使用react-router 
> 可以参考以下地址
[地址](https://reacttraining.com/react-router/web/guides/quick-start)
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


### 项目采用jss (开发)
>  欲了解更多，Google jss
#### 遇到的困难
> 使用jss时，我会发现，在withStyle包裹之后，拿不到来router ,会有这样的报错。

**// ComponentType<Pick<ComponentProps & StylesProps & RouteComponentProps<any, StaticContext, any>, "data" | "header" | "currency" | "history" | "location" | "match" | "staticContext" | "operation" | "matured"> & StyledComponentProps<...>>' is not assignable to parameter of type 'ComponentClass<Pick<ComponentProps & StylesProps & RouteComponentProps<any, StaticContext, any>, "data" | "header" | "currency" | "history" | "location" | "match" | "staticContext" | "operation" | "matured"> & StyledComponentProps<...>, any> | (ComponentClass<...> & FunctionComponent<...>)'.**

这个时候，很慌，尝试各种方案，都没有拿到想要的router！！ 经过一方google,找到来答案，可以参考这个连接[点我](https://stackoverflow.com/questions/58604851/typescript-error-when-using-withrouterwithstylesstylescomponentname)

具体代码
```tsx
// 引入
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface IProps extends RouteComponentProps, WithStyles<typeof styles> {
}
// 导出
export default withStyle(styles)(withRouter(Slider))


```

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
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
        // eslint-disable-next-line no-useless-computed-key
        ["@"]: path.resolve(__dirname, "src"),
    })(config)
    config = rewireCssModules(config, env)

    config = fixBabelImports('import', {
        libraryName: 'antd',
        style: true
    })(config)

    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1183fb', '@brand-primary': '#1183fb' }
    })(config, env)
    return config
}
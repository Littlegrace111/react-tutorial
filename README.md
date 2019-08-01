install webpack globally

基于Webpack 3.x 版本构建reactjs工程

html-webpack-plugin 用于打包html文件
webpack中配置解析ES6 也就是ES2015的功能 Babel

出现的问题和踩得坑：

1. charles map local 问题

charles 采用4.2.8 版本，不能捕获localhost的请求，所以localhost的map local失效，无法mock ajax请求

解决办法：
把请求地址改成主机名字.local:3000 来请求

2. invalid host header
这是由于新版的webpack-dev-server出于安全考虑，默认检查hostname，如果hostname 不是配置内的，将中断访问。  
在webpack.dev.conf.js的devServer配置中添加disableHostCheck: true  
    `devServer: {
      disableHostCheck: true,
    }`


## 空白项目模板

> 通过 npx create-react-app demo 来初始化
>
> create-react-app 简称 CRA

* 基于 CRA 创建，精简文件+配置，不依赖 dva、umi 第三方框架，尽量用 react style 渐进式开发。



### 对 CRA 做了什么？

* react-scripts 改为 react-app-rewired

* 通过 config-overrides.js 配置按需加载 antd、less、alias

https://www.cnblogs.com/zyl-Tara/p/10635033.html

https://github.com/arackaf/customize-cra

* public 删除无用 png、manifest 文件

* 删除 test-library，包括 testSetup.js 和 package 依赖

* 删除 serviceWorker

  

### 如何跑起来

* 调试，npm start

* 打包，npm run build
  * 注意：如果 app 初始化没用 browserHistory 设置 baseName 为'.'的话，需要手动在 package.json 加一下 homepage:'.'，否则 build 产物点击 index.html 打开会空白，因为 js、css 文件地址是 file://static/xxx，导致 404

  https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/deployment.md#building-for-relative-paths

  https://stackoverflow.com/questions/54591664/reactjs-neterr-file-not-found

* 包分析，TODO



### 如何开始 coding

* 以 App 为入口，添加 react-router，或者 index.js 用 dvajs 重写

* 添加状态管理 redux 或 unstated，推荐 unstated，更轻量。或者直接 dva model

* 组件化，组件嵌套尽量用 delegate、render props，不行再用数据流，unstated 或者 dav connect/dispatch



### 如何规范

- pages === UIViewController
- view === components
- service === Manager
- utils === utils



### 常用插件

- prettier，代码格式化，配置需对齐
- dvajs，代码提示，迅速补全

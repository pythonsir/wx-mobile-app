
# wx-mobile-app

[![node](https://img.shields.io/badge/node-%3E%3D7.9.0-blue.svg)]()
[![npm](https://img.shields.io/badge/npm-%3E%3D4.2.0-green.svg)]()

使用 [Create-React-App](https://github.com/facebook/create-react-app) 脚手架，集合了react-redux、react-router-redux、redux-saga、axios 等构建的开源微商城


## 效果gif

![](https://github.com/pythonsir/wx-mobile-app/blob/master/screenshot.gif)

## 项目结构

```
- build                      打包后的项目目录
- public
  - favicon.ico
  - index.html               主页面
  - mainifest.json
- src                        源码文件夹
  - assets                   资源文件夹
  - common
    - menu.js                底部Tabbar配置
    - router.js              Tabbar切换对应的组件
  - components               组件文件夹
    ...
  - layouts                  布局文件夹
    - BaseLayout.js          后台布局
    - BaseLayout.less
  - mock                     模拟数据文件夹
    ......
  - redux
    - index.js               所有同步redux的入口
    ......                   
  - routes                   容器组件文件夹
    ......
  - saga                     
    - index.js               异步redux的入口
    ......
  - services
    - api.js                 请求入口
  - store
    - index.js
  - untils                   辅助类
    .....
  index.js
  index.css
- config-overrides.js        webpack配置文件
  ......
```


## 安装
下载完成后，在项目根目录使用 `yarn install` , 推荐使用 `yarn` 安装。
## 启动
在根目录运行如下命令:  
`yarn start`



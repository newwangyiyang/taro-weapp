### 项目简介

-   taro 小程序端开发框架;
-   集成 typescript、redux、taro-ui;
-   scss-package
    -   尺寸标准: 750
    -   重置 scss 配置(配置 \* 2)
    -   自定义组件需加: addGlobalClass
        ```ts
        HelloWorld.options = {
        	addGlobalClass: true
        };
        ```
    -   sass 文件目录:
        -   scss-variable.scss: 全局变量
        -   scss-mixins.scss: 全局 mixins
        -   scss-config.scss: scss-package(在 app.scss 中@import 引入)
    -   配置 config/index.js 中的 scss，全局 scss 文件中引入 scss-variable.scss、scss-mixins.scss
-   wx: 定义 wx 全局变量,定义类型(API)接口
    -   无需再全局定义(tools.d.ts):
        `ts declare const wx: any`
    -   @types/weixin-app
        `yaml yarn add @types/weixin-app -D`
-   TODO: ColorsUI / Vant

-   taro-f2: taro 多端 F2 图表

    -   ![github](https://github.com/xioxin/taro-f2)
    -   ![antv](https://f2.antv.vision/zh/docs/tutorial/getting-started)

-   TODO: react-admin 集成 react-logger

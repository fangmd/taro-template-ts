taro 小程序 模版: react, hooks, ts, mobx

# 注释

必加注释:

1. 工具类：utils 文件夹下的 函数和类
2. 接口函数: service 文件夹下的函数和类
3. 页面注释: pages 文件夹下的 页面中文名称

# 工程结构

1. `constants`: 放静态常量
2. `pages`: 页面
3. `service`: 接口请求代码
4. `store`: 全局状态管理
5. `utils`: 工具文件夹
6. `components`: 公共组件
7. `hooks`: 自定义 hook
8. `plugins`: 小插件，全局第三方库引入


## 模版项目功能

- [x] 网路请求封装: 支持 loading
- [x] 列表 demo，支持下拉刷新和上拉加载
- [ ] tab + list
- [ ] mobx 状态管理
- [x] @ alias 设置
- [x] 750 设计稿 UI 适配
- [x] base ui utils: showToast, showLoading
- [x] 微信版本更新弹框提示

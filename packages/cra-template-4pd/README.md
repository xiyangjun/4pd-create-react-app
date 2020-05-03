# cra-template-4pd

## 项目如何工作

    `yarn start`

## 如何联调

```javascript
module.exports = function(app) {
  app.use(
    '/api', // 设置要代理的请求请求前缀
    createProxyMiddleware({
      target: 'http://127.0.0.1:8051/', // 代理服务端url
      changeOrigin: true,
      headers: {
        Host: '172.27.14.125:9000', // 代理服务端host
        cookie: 'User-Token=a1b10b35-edcb-4726-882a-e2aa59f98d88', // 用户token设置
      },
    })
  );
};
```

# 优化

## 开启包分析插件

`.env`里设置 `BUNDLE_ANALYZER = true`即可开启打包分析插件

## 如何配置 DLL

项目默认不启用 dll，由开发者自行决定。如果决定启用 dll 可以在`lib/dll.dev.js`里来配置需要打包的类库

    `yarn run dll`

运行此命令后会在`.env`文件里写入`DEV_DLL = true`如何想关闭 dll 删除此配置即可。
以上示例为 dev 模式，prod 模式也同样道理运行`yarn run dllp`即可

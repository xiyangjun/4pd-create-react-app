# cra-template-4pd

## 项目如何工作

    `yarn start`

## 如何联调

1. 在`.proxyUrl`中输入你的代理地址即可
3. 如果服务端需要token验证，在浏览器控制台自己设置需要的cookie即可
2. 如果需要频繁切换代理地址，请到[easy-mock](http://172.27.69.3:8300/editor/5f6c1b86e5cc3c001d46273e/5f6c1ba1e5cc3c001d462740)设置你的代理列表，设置代理列表需要一个`key`来标识你自己的代理，这个`key`可以在.env.development文件用`PROXY_TARGET_NAME`来设置

示例如下：
`PROXY_TARGET_NAME=aios`
服务端返回数据
```json
{
  "data": {
    "aios": ["http://xxx", "http://xxx.xxx"],
    "xxx": []
  }
}
```
当你`yarn start`启动后就会在页面右下角看到一个三角形小图标，点击小图标就可以看到代理列表，选择任意地址进行切换

# 优化

## 开启包分析插件

`.env`里设置 `BUNDLE_ANALYZER = true`即可开启打包分析插件

## 如何配置 DLL

项目默认不启用 dll，由开发者自行决定。如果决定启用 dll 可以在`lib/dll.dev.js`里来配置需要打包的类库

    `yarn run dll`

运行此命令后会在`.env`文件里写入`DEV_DLL = true`如何想关闭 dll 删除此配置即可。
以上示例为 dev 模式，prod 模式也同样道理运行`yarn run dllp`即可

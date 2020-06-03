# cra-template-4pd

## 项目如何工作

    `yarn start`

## 如何联调

在.proxyUrl 文件里输入需要链接的服务端 url example: http://xxxx.com, 然后在`setupProxy.js`中 找到`proxyPath`变量，设置要代理的请求路径即可

服务端 cookie 设置，下载 chrome 插件 editthiscookie 启动服务打开调试页面，点击插件图标添加服务端需要的 cookie 即可

# 优化

## 开启包分析插件

`.env`里设置 `BUNDLE_ANALYZER = true`即可开启打包分析插件

## 如何配置 DLL

项目默认不启用 dll，由开发者自行决定。如果决定启用 dll 可以在`lib/dll.dev.js`里来配置需要打包的类库

    `yarn run dll`

运行此命令后会在`.env`文件里写入`DEV_DLL = true`如何想关闭 dll 删除此配置即可。
以上示例为 dev 模式，prod 模式也同样道理运行`yarn run dllp`即可

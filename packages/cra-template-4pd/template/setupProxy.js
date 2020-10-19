const fs = require('fs');
const { createProxyMiddleware } = require('http-proxy-middleware');
const serverProxyPath = ['/api'];
const devProxyPath = ['/dev/proxy'];

module.exports = function (app) {
    let proxyUrl = fs.readFileSync('.proxyUrl').toString(); // 得到代理的url

    fs.watch('.proxyUrl', eventType => {
        if (eventType === 'change') {
            proxyUrl = fs.readFileSync('.proxyUrl').toString();
        }
    });

    app.get('/proxy/change', (req, res) => {
        if (req.params.proxyUrl) {
            proxyUrl = req.params.proxyUrl;
        }
        if (req.query.proxyUrl) {
            proxyUrl = req.query.proxyUrl;
        }
        res.send({ data: { proxyUrl } });
    });

    // 更新代理的url
    if (proxyUrl.trim()) {
        app.use(
            serverProxyPath,
            createProxyMiddleware({
                target: proxyUrl,
                changeOrigin: true,
                secure: !/^https/.test(proxyUrl),
                router: () => proxyUrl,
            }),
        );
    }

    //得到mock的环境，便于dev环境切换
    const devProxyUrl = process.env.PROXY_MOCK_URL; // 得到mock的环境链接
    const proxyTargetName = process.env.PROXY_TARGET_NAME; // 得到根目录名称
    if (devProxyUrl.trim()) {
        const proxyMiddleware = createProxyMiddleware({
            target: devProxyUrl,
            changeOrigin: true,
            selfHandleResponse: true,
            secure: !/^https/.test(devProxyUrl),
            router: () => devProxyUrl,
            onProxyRes: (proxyRes, req, res) => {
                proxyRes.on('data', data => {
                    const proxyData = JSON.parse(data.toString());
                    res.json(proxyData.data[proxyTargetName]);
                });
            },
        });
        app.use(devProxyPath, proxyMiddleware);
    }
};

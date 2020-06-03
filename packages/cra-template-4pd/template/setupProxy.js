const fs = require('fs');
const {
    createProxyMiddleware
} = require('http-proxy-middleware');
const proxyPath = ['/'];
module.exports = function (app) {
    let proxyUrl = fs.readFileSync('.proxyUrl').toString();
    fs.watch('.proxyUrl', eventType => {
        if (eventType === 'change') {
            proxyUrl = fs.readFileSync('.proxyUrl').toString();
        }
    });
    if (proxyUrl.trim()) {
        app.use(
            proxyPath,
            createProxyMiddleware({
                target: proxyUrl,
                changeOrigin: true,
                router: () => proxyUrl,
            }),
        );
    }

};
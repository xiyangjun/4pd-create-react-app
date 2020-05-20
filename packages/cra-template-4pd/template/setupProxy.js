const fs = require('fs');
const {
    createProxyMiddleware
} = require('http-proxy-middleware');
module.exports = function (app) {
    let proxyUrl = fs.readFileSync('.proxyUrl').toString();
    fs.watch('.proxyUrl', eventType => {
        if (eventType === 'change') {
            proxyUrl = fs.readFileSync('.proxyUrl').toString();
        }
    });
    app.use(
        ['/'],
        createProxyMiddleware({
            target: proxyUrl,
            changeOrigin: true,
            router: () => proxyUrl,
        }),
    );
};
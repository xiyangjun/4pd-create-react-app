const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            // target: 'http://127.0.0.1:8051/',
            changeOrigin: true,
            headers: {
                // Host: '172.27.14.125:9000',
                // cookie: 'User-Token=a1b10b35-edcb-4726-882a-e2aa59f98d88',
            }
        })
    );
};

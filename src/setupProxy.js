const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  // ...
  app.use(
    "/api",
    proxy({
        host: "renthousetest.yaogeng.top",
        // target: "https://api.yaogeng.top",
        target: "http://127.0.0.1:7002",
        changeOrigin: true,
        pathRewrite: {
            "^/api": "",
        },
    }),
  );
};

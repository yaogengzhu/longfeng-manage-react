const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  // ...
  app.use(
    "/api",
    proxy({
        host: "renthousetest.yaogeng.top",
        target: "https://api.yaogeng.top",
        changeOrigin: true,
        pathRewrite: {
            "^/api": "",
        },
    }),
  );
};

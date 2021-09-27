const withTM = require("next-transpile-modules")(["../../libs/core"]);

module.exports = withTM({
  reactStrictMode: true,
})

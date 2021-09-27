const withTM = require("next-transpile-modules")(["core"]);

module.exports = withTM({
  reactStrictMode: true,
})

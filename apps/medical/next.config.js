const withTM = require("next-transpile-modules")(["../../libs/core"]);

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
      "react/jsx-runtime": "react/jsx-runtime.js",
    }

    return config;
  }
})

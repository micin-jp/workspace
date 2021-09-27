const withTM = require("next-transpile-modules")(["../../libs/core"]);

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // NOTE: webpack5だとCI上で 'react/jsx-runtime' のパス解決ができず、Buildができない問題
      // https://github.com/facebook/react/issues/20235
      'react/jsx-runtime': require.resolve('react/jsx-runtime'),
    };


    return config;
  }
})

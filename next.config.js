/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.luluandgeorgia.com'],
  },
  webpack(config, options) {
    const pluginsToAdd = [
      new options.webpack.IgnorePlugin({
        resourceRegExp:
          /(@aws-sdk\/credential-providers)|(kerberos)|(@mongodb-js\/zstd)|(snappy)|(aws4)|(mongodb-client-encryption)/,
        contextRegExp: /mongodb\/lib$/,
      }),
    ];
    if (config.plugins) {
      config.plugins.push(...pluginsToAdd);
    } else {
      config.plugins = pluginsToAdd;
    }
    return config;
  },
};

module.exports = nextConfig;

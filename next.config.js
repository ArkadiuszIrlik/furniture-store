/** @type {import('next').NextConfig} */
const nextConfig = {
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
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer(nextConfig);

// module.exports = nextConfig;

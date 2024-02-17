/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Enable the appDir feature
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Configure loader for PDF files:
      config.module.rules.push({
        test: /\.pdf$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            esModule: false, // Ensure compatibility with webpack5 and Next.js 13
          },
        },
      });
    }

    return config;
  },
};

module.exports = nextConfig;

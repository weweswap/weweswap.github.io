// next.config.mjs
import { TerserPlugin } from 'terser-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Optional: Enables additional React checks in development
  swcMinify: true, // Enables the use of SWC for minification

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Remove console logs in production
            },
            output: {
              comments: false, // Remove comments in production
            },
          },
        }),
      ];
    }
    return config;
  },

  productionBrowserSourceMaps: false, // Disable source maps in production
};

export default nextConfig;

/** @type {import('next').NextConfig} */

import TerserPlugin from 'terser-webpack-plugin';
const nextConfig = {
    swcMinify: true,
    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            config.optimization.minimize = true;
            config.optimization.splitChunks = {
                chunks: 'all',
                minSize: 20000,
                maxSize: 100000,
            };
            config.optimization.minimizer = [
                new TerserPlugin({
                    terserOptions: {
                        format: {
                            comments: false,
                        },
                        compress: true,
                        mangle: true,
                    },
                    extractComments: false,
                }),
            ];
        }
        return config;
    },
};

export default nextConfig;

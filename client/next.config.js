/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'custom',
    loaderFile: './src/utils/imgLoader.js',
    // domains: ['http://didyoueeat.s3-website.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;

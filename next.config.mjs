/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/shiv-tour-and-travels',
  assetPrefix: '/shiv-tour-and-travels/',
};

export default nextConfig;

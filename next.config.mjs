const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dae4sosbl/**"
      }
    ]
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add your custom Webpack configuration here
    config.resolve.alias = {
      '@': path.resolve(__dirname, './'),
    };

    return config;
  },
};

export default nextConfig;

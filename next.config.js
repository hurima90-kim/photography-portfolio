const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ['localhost'],
  },
};

module.exports = withContentlayer(nextConfig);

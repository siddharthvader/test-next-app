/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/' : { page: '/' }
    };
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

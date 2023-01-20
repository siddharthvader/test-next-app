/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/' : { page: '/' }
    };
  },
  images: {
    unoptimized: true,
  },
};

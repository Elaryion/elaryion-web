/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'cdn.builder.io',
      'pagedone.io',
      'i.hizliresim.com'
    ],
  },
}

module.exports = nextConfig 
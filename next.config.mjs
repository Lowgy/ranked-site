/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: process.env.TEST_URL,
  },
}

export default nextConfig

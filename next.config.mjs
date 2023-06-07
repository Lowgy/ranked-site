/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "crafatar.com",
        port: "",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

export default nextConfig

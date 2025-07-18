/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@monorepo/shared-ui', '@monorepo/auth-service'],
};

module.exports = nextConfig;

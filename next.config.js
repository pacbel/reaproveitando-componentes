/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@monorepo/shared-ui', '@monorepo/auth-service'],
  experimental: {
    externalDir: true,
  }
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@monorepo/shared-ui", "@monorepo/auth-service"],
  output: "standalone", // Para Docker
  // ─ ─ ─ Next 15+ não possui `serverExternalPackages`; removido para evitar warning
  trailingSlash: true,
  serverExternalPackages: [],
  generateBuildId: async () => {
    return "build-" + Date.now();
  },
  // Desabilitar static export e otimização
  images: {
    unoptimized: true,
  },
  // Valor razoável para o timeout de geração de páginas estáticas
  staticPageGenerationTimeout: 60,
};

module.exports = nextConfig;

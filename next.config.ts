import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出
  output: "export",

  // 缓存与部分预取
  cacheComponents: true,
  partialPrefetching: true,

  // 实验性功能
  experimental: {
    agentFeedback: true,
  },

  // Turbopack 配置
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

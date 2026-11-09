import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出
  output: "export",

  // 禁用 Cache Components 和部分预取
  cacheComponents: false,
  partialPrefetching: false,

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

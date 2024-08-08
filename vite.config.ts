import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  plugins: [vue(), svgLoader()],
  base: "./",
  build: {
    chunkSizeWarningLimit: 1000,
    minify: true,
    sourcemap: "inline",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@composable": path.resolve(__dirname, "./src/composable"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@mixins": path.resolve(__dirname, "./src/mixins"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@testHelpers": path.resolve(__dirname, "./src/testHelpers"),
      "@mockData": path.resolve(__dirname, "./test/unit/mockData"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
    },
    extensions: [".ts", ".js", ".vue", ".png", ".json"],
  },
  server: {
    host: "0.0.0.0",
    port: parseInt(process.env.VITE_PROXY_PORT) || 4041,
    proxy: {},
    watch: {
      usePolling: true,
    },
  },
});

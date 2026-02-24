import { defineConfig } from 'vite';
import path from "path";

export default defineConfig({
  base: '/idli-house-showcase/',
  server: {
    host: 'localhost',
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

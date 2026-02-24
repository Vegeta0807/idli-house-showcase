import { defineConfig } from 'vite';
import path from "path";

export default defineConfig({
  base: '/idli-house-showcase/',
  server: {
    host: 'localhost',
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

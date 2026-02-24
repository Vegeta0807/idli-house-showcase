import { defineConfig } from 'vite';

export default defineConfig({
  base: '/my-base-path/', // Update base path for production
  server: {
    host: 'localhost', // Change host from "::" to "localhost"
  },
  build: {
    outDir: 'dist', // Specify build output directory
    minify: 'terser', // Additional build configuration
    sourcemap: true,
  },
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './static/frontend', // Output directory for build
  },
  server: {
    open: true, // Open the browser on server start
    proxy: {
      '/api': 'http://localhost:8000', // Proxy API requests to Django
    },
  },
});

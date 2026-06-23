import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2018',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-icons')) return 'icons';
            if (id.includes('react-router-dom')) return 'router';
            if (id.includes('react-dom') || id.includes('/react/')) return 'react';
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    hmr: { overlay: false },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-avatar', '@radix-ui/react-dialog', 'lucide-react'],
        },
      },
    },
  },
  server: {
    port: 3000,
    host: true,
  },
})

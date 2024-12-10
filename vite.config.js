import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Expose l'app sur tous les interfaces réseau
    port: 5173, // Le port que vous utilisez
    strictPort: true, // Assure que le port 5173 soit utilisé, sinon il échouera
    open: true, // (Optionnel) Ouvre automatiquement le navigateur
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  proxy: {
    '/api': {
      target: 'https://pub-za.appcubecloud.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
})



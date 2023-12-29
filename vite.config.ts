import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(
      {
        template: {
          compilerOptions: {
            isCustomElement: (tag) => ['organisms-currency-list'].includes(tag),
          }
        }
      }
    ),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8000,
    host: '0.0.0.0',
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  preview: {
    port: 8000,
  }
})

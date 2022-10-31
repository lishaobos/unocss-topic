import { defineConfig } from 'vite'

export default defineConfig({
  base: '/unocss-topic',
  server: {
    hmr: {
      overlay: false
    }
  }
})
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/unocss-topic/docs',
  server: {
    hmr: {
      overlay: false
    }
  }
})
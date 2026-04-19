import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/pannakotta/',
  build: {
    rollupOptions: {
      input: {
        index:   'index.html',
        livers:  'livers.html',
        news:    'news.html',
        recruit: 'recruit.html',
        relay:   'relay.html',
      }
    }
  }
})

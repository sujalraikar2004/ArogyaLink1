import { defineConfig } from 'vite'
import react from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'http://localhost:4000',
    },
  },
  plugins: [react()],
})

// vite.config.js

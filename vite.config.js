import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy :{
      "/asad" : "http://localhost:4000"
      // "/api" : "http://localhost:4000"
    }
  }
})

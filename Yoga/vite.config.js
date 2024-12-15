import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000, // Replace 8080 with your desired port number
    host: '0.0.0.0', // Allows the server to be accessible externally
  },
  plugins: [react()],
})

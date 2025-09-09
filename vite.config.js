import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    proxy: {
      "/api": {
        target: "https://xyonica.ct.ws",
        changeOrigin: true,
        secure: false, // ignore SSL issues
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})

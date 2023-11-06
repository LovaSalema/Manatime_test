import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Manatime_test",
  build: {
    rollupOptions: {
      external: ["react/jsx-runtime.js"],
    },
  },
})

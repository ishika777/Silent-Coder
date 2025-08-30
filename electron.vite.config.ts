import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': path.resolve(__dirname, './src/renderer/src'),
        '@': path.resolve(__dirname, './src')
      },
    },
    plugins: [
      react(),
      tailwindcss(), // ✅ Tailwind v4 plugin
    ],
  },
})

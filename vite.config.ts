import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Skyway-Travel-Companion-Services/',
  plugins: [react()],
})

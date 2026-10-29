import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Jika di-deploy ke sub-folder (mis. GitHub Pages: /nama-repo/), ubah base menjadi '/nama-repo/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})

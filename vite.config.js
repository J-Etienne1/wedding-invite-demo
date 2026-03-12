import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'wedding-invite' below with your actual GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/wedding-invite-demo/',
})

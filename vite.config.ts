import { defineConfig } from 'vite'
import { mdx } from "@cyco130/vite-plugin-mdx"
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/resume/',
  plugins: [
    mdx(),
    react()],
})

import { defineConfig } from 'vite'
import { join, resolve } from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: resolve(join(__dirname, 'src/components')),
      },
    ],
  },
})

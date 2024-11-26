import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Ask-DaViD-RED/',
  assetsInclude: ['**/*.mp4'],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        verification: resolve(__dirname, 'googled67e97ffb74a41fc.html')
      },
      output: {
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').at(1);
          if (/mp4|webm|ogg/i.test(extType)) {
            return 'assets/videos/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true
  }
})

import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import { viteExternalsPlugin } from 'vite-plugin-externals'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    viteExternalsPlugin(
      {
        'zalo-js-bridge': 'ZJSBridge',
      },
      {
        disableInServe: true,
      }
    ),
  ],
})

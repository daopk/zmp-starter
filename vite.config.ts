import vue from '@vitejs/plugin-vue'
import path from 'path'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    components({
      dts: 'src/components.d.ts',
      resolvers: [VantResolver()],
    }),
    autoImport({
      imports: ['vue'],
      dirs: ['src/store'],
      dts: 'src/auto-imports.d.ts',
    }),
    viteExternalsPlugin(
      {
        'zalo-js-bridge': 'ZJSBridge',
      },
      {
        disableInServe: true,
      }
    ),

    visualizer(),
  ],
})

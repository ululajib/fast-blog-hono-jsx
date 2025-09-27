import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import ssrPlugin from 'vite-ssr-components/plugin'

export default defineConfig({
  plugins: [cloudflare(), ssrPlugin()],
  resolve: {
    alias: {
      util: resolve(__dirname, 'src/polyfills/util.ts')
    }
  }
})

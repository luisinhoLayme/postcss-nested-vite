// vite.config.(js|ts)
import { defineConfig } from "vite"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"
import { ViteMinifyPlugin } from "vite-plugin-minify"
import vitePugPlugin from "vite-plugin-pug-transformer"

export default defineConfig({
  plugins: [
    vitePugPlugin({}),
    ViteMinifyPlugin({}),
    ViteImageOptimizer({})
  ],
})

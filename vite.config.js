const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  // base: './',
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'deploy'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src', 'index.html'),
        about: resolve(__dirname, 'src', 'about/index.html'),
        events: resolve(__dirname, 'src', 'events/index.html'),
      },
      external: ['humans.txt'],
    },
  },
})

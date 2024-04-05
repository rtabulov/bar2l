import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools';
import sassGlobImports from 'vite-plugin-sass-glob-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools(), sassGlobImports()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '/bar2l/',
});

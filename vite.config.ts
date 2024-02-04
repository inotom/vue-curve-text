/** @prettier */

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import banner from 'vite-plugin-banner';
import pkg from './package.json';

const copyright = `/*! ${pkg.name} v${pkg.version} ${pkg.author} | ${pkg.license} License */`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [banner(copyright), vue(), cssInjectedByJsPlugin()],
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SwsVueCurveText',
      fileName: (format: string): string => {
        switch (format) {
          case 'umd':
            return 'vue-curve-text.umd.js';
          default:
            return 'vue-curve-text.js';
        }
      },
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});

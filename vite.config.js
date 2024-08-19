// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    base: '',
    build: 'dist',
    resolve: {
        alias: {
          '~bootstrap': path.resolve(process.cwd(), 'node_modules/bootstrap'),
        }
      },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "bootstrap/dist/css/bootstrap.min.css";`
            }
        }
    },
    server: {
        hmr: true // Hot Module Replacement
      },
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import electron from 'vite-plugin-electron';
import path from 'path';
//import tsconfigPaths from 'vite-tsconfig-paths'; // facultatif mais pratique

export default defineConfig({
  server: {
    port: 3000, // Port pour le serveur de développement
    host: 'localhost', // Hôte pour le serveur de développement
  },
  root: path.resolve(__dirname, 'src/views'),
  base: './',
  plugins: [
    react(),

    electron({
      entry: path.resolve(__dirname, 'src/main/index.ts'),
      vite: {
        resolve: {
          alias: {
            '@src': path.resolve(__dirname, 'src'), // pour le main process
            '@components': path.resolve(__dirname, 'src/views/components'),
            '@ds': path.resolve(__dirname, 'src/designSystem'),
            '@pages': path.resolve(__dirname, 'src/views/pages'),
            '@modelEntities': path.resolve(__dirname, 'src/models/entities'),
            '@services': path.resolve(__dirname, 'src/services'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@assets': path.resolve(__dirname, 'assets'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@poc': path.resolve(__dirname, 'src/poc'),
          },
        },
      },
    }),
  ],
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/views/components'),
      '@ds': path.resolve(__dirname, 'src/designSystem'),
      '@pages': path.resolve(__dirname, 'src/views/pages'),
      '@modelEntities': path.resolve(__dirname, 'src/models/entities'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@assets': path.resolve(__dirname, 'assets'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@poc': path.resolve(__dirname, 'src/poc'),
    },
  },
});

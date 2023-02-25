import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@api', replacement: path.resolve(__dirname, 'src/api') },
      { find: '@domain', replacement: path.resolve(__dirname, 'src/domain') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@store', replacement: path.resolve(__dirname, 'src/store') },
    ],
  },
});

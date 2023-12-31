import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '~pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '~components/layout',
        replacement: path.resolve(__dirname, 'src/components/layout'),
      },
      {
        find: '~router',
        replacement: path.resolve(__dirname, 'src/router'),
      },
      {
        find: '~utils/store',
        replacement: path.resolve(__dirname, 'src/utils/store'),
      },
      {
        find: '~utils/api',
        replacement: path.resolve(__dirname, 'src/utils/api'),
      },
      {
        find: '~utils/consts',
        replacement: path.resolve(__dirname, 'src/utils/consts'),
      },
      {
        find: '~utils/helpers',
        replacement: path.resolve(__dirname, 'src/utils/helpers'),
      },
      {
        find: '~utils/hooks',
        replacement: path.resolve(__dirname, 'src/utils/hooks'),
      },
      {
        find: '~utils/contexts',
        replacement: path.resolve(__dirname, 'src/utils/contexts'),
      },
      {
        find: '~features/intl',
        replacement: path.resolve(__dirname, 'src/features/intl'),
      },
      {
        find: '~features/theming',
        replacement: path.resolve(__dirname, 'src/features/theming'),
      },
      {
        find: '~static',
        replacement: path.resolve(__dirname, 'src/static'),
      },
    ],
  },
});

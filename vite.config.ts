import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

const getBase = () => {
  if (process.env.NODE_ENV === 'development') return '/';
  return `/${
    process.env.GITHUB_REPOSITORY?.split('/')[1] || 'state_command_example'
  }/`;
};

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});

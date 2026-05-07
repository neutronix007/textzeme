import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    // Required for @lottiefiles/dotlottie-react — prevents Vite from
    // pre-bundling the package so its WASM web worker loads correctly.
    optimizeDeps: {
      exclude: ['@lottiefiles/dotlottie-react'],
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

// Read homepage from package.json to determine correct base path
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
let basePath = '/';
try {
  if (packageJson.homepage && packageJson.homepage !== '.') {
    const url = new URL(packageJson.homepage);
    basePath = url.pathname.endsWith('/') ? url.pathname : url.pathname + '/';
  }
} catch (e) {
  console.warn('Could not parse homepage URL, defaulting to /');
}

export default defineConfig(({ command }) => {
  return {
    base: basePath,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

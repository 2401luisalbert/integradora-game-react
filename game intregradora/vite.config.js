import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url'; // Importa la función fileURLToPath para trabajar con import.meta.url
import path from 'path'; // Importa el módulo 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  // base: "/integradora-game-react/",
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, '/index.js'),
        sw: path.resolve(__dirname, '/sw.js'),
        manifest: path.resolve(__dirname, '/manifest.json'),
      }
    }
  }
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/rootme': {
        target: 'https://api.www.root-me.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/rootme/, ''),
        secure: false,
        ws: true,
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            proxyReq.setHeader('Cookie', 'api_key=886940_47052075a26422c0148aaa882b31974eb708ecad220b6347862430655ee94e3f')
          })
        }
      }
    }
  }
})

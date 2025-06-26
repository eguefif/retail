import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/graphql': {
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                configure: (proxy) => {
                    proxy.on('proxyReq', (proxyReq, req) => {
                        if (req.headers.origin) {
                            proxyReq.setHeader('origin', 'http://127.0.0.1:8000');
                            proxyReq.setHeader('referer', 'http://127.0.0.1:8000');
                        }
                    });
                },
            },
        },
    }
});

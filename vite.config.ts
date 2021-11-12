import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import viteCompression from 'vite-plugin-compression'
import components from 'unplugin-vue-components/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        viteCompression(),
        components({
            resolvers: [VarletUIResolver()],
            dts: true,
        }),
        legacy({
            targets: ["> 1%", "last 4 versions", "not dead"]
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    server: {
        host: '0.0.0.0',
        port: 8090,
        strictPort: false
    }
})

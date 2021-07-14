import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: false,
      }),
    ],
    resolve: {
      alias: [
        {
          find: /^@\//,
          replacement: resolve(__dirname, 'src') + '/',
        },
        {
          find: /^\/#\//,
          replacement: resolve(__dirname, 'types') + '/',
        },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: scssData,
          sourceMap: true,
          additionalData: `@import "./src/styles/entry.scss";`,
        },
      },
    },
  }
}

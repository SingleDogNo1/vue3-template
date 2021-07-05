import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default ({ command }: ConfigEnv): UserConfigExport => {
  console.log('command :>> ', command)
  return {
    plugins: [vue()],
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
  }
}

import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import fs from 'fs'

// vite 现在不支持直接读取文件，所以手动读取 var.scss 文件，添加到指定的配置项里
const scssText = fs.readFileSync('./src/styles/variables/var.scss', 'utf-8')
const scssData = scssText.replace(/(\s+)/g, '').replace(/:export.+\}$/g, '')

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
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: scssData,
        },
      },
    },
  }
}

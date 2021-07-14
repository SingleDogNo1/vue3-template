import viteTestPlugin from 'vite-plugin-test'
import viteConfigFn from './vite.config'

export default (options) => {
  const config = viteConfigFn(options) as unknown as any

  config.plugins.push(viteTestPlugin())

  return config
}

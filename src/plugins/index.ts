import { setupElementUI } from './element-ui'
import { App } from 'vue'

export function setupGlobPlugins(app: App<Element>) {
  setupElementUI(app)
}

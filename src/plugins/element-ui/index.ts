import Element from 'element-plus'
import './index.scss'
import { App } from 'vue'

export function setupElementUI(app: App<Element>) {
  app.config.globalProperties.$ELEMENT = { size: 'medium', zIndex: 3000 }
  app.use(Element)
}

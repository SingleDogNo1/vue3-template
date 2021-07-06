import { createApp } from 'vue'
import App from './App.vue'
import { router, setupRouter } from './router'
import { setupStore } from './store'
import { setupGlobPlugins } from './plugins'

const app = createApp(App)

async function bootstrap() {
  // plugins
  await setupGlobPlugins(app)
  // vuex
  await setupStore(app)
  // vue-router
  await setupRouter(app)

  // 所有组件注册完成
  await router.isReady()
  app.mount('#app')
}

void bootstrap()

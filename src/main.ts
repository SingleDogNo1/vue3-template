import { createApp } from 'vue'
import App from './App.vue'
import { router, setupRouter } from '@/router'
import { setupStore } from './store'

const app = createApp(App)

async function bootstrap() {
  await setupStore(app)
  await setupRouter(app)
  await router.isReady()
  app.mount('#app')
}

bootstrap()

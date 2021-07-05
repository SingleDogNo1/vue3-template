import { createApp } from 'vue'
import App from './App.vue'
import { router, setupRouter } from '@/router'

const app = createApp(App)

async function bootstrap() {
  await setupRouter(app)
  await router.isReady()
  app.mount('#app')
}

bootstrap()

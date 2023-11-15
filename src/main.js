import '@/shared/styles/main.css'
import '@/shared/styles/normalize.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import UiKitComponent from '@/shared/ui-kit/config.js'

const app = createApp(App)

app.use(router)

UiKitComponent.forEach((component) => {
  app.component(component.name, component.path)
})

app.mount('#app')

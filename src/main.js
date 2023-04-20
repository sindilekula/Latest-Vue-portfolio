import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Hotjar from 'vue-hotjar'

Vue.use (Hotjar, {
  id: '3457823', // Hotjar Site ID
  isProduction: true,
  snippetVersion: 6
})

createApp(App).use(router).mount('#app')

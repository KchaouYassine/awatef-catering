
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CoreuiVue from '@coreui/vue'
import '@coreui/coreui/dist/css/coreui.min.css'
import './assets/main.css'

const app = createApp(App)

app.use(CoreuiVue)
app.use(router)

app.mount('#app')

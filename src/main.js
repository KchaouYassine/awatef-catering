
import { createApp } from 'vue'
import App from './App.vue'

import CoreuiVue from '@coreui/vue'
import '@coreui/coreui/dist/css/coreui.min.css'
import './assets/main.css'

const app = createApp(App)

app.use(CoreuiVue)

app.mount('#app')

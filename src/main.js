import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/normalize.css'
// 导入Unocss样式
import 'uno.css'

// import { getConfig } from '@/config/index'

// console.log(getConfig('projectCode'))
// console.log(getConfig('projectName'))
// console.log(import.meta.env.VITE_APP_ENV)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

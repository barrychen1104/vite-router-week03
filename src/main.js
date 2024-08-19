import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/all.scss'
const app = createApp(App)

// 全域註冊
//import EasyCard from './components/EasyCard.vue'

app.use(router)

// 註冊位置會在createApp後面
// 元件名稱 , 元件
//app.component('EasyCard', EasyCard)

app.mount('#app')

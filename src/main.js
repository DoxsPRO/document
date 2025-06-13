import { createApp } from 'vue';
import './style.css';
import Vueform from '@vueform/vueform'
import vueformConfig from './vueform.config'


import App from './App.vue';
const app = createApp(App)
app.use(Vueform, vueformConfig)
app.mount('#app')


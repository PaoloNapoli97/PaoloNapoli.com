import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import VueWriter from "vue-writer";

createApp(App).use(router, VueWriter).mount('#app')

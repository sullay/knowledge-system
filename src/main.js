/*
 * @Description:
 * @Version: 1.0
 * @Author: sullay
 * @Date: 2020-05-29 14:46:47
 * @LastEditors: sullay
 * @LastEditTime: 2020-05-29 17:51:41
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.scss'
import 'prismjs/themes/prism.css'
import './assets/css/markdown-segmentfault.css'

createApp(App).use(router).use(store).mount('#app')

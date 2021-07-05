import Vue from "vue"
import App from "./App.vue"
import router from './router'

import 'prismjs/themes/prism.css'
import './styles/index.scss'

import LmUi from '../lib/index'
import '../lib/lm-theme/index.css'
import LmDir from '@/directives/'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUi)

Vue.config.productionTip = false

Vue.use(LmUi)
Vue.use(LmDir)

new Vue({
  router,
  render: (h) => h(App),
})
.$mount("#app")

import Vue from "vue"
import App from "./App.vue"

import LmUi from '../lib/index'
import '../lib/lm-theme/index.css'
import LmDir from '@/directives/'

Vue.config.productionTip = false

Vue.use(LmUi)
Vue.use(LmDir)

new Vue({
  render: (h) => h(App),
})
.$mount("#app")

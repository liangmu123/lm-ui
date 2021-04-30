import Vue from "vue"
import App from "./App.vue"
import LmUi from '../lib/index'

Vue.config.productionTip = false

Vue.use(LmUi)

new Vue({
  render: (h) => h(App),
})
.$mount("#app")

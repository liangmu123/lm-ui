import Vue from "vue"
import App from "./App.vue"
import LmUi from '../packages'

Vue.config.productionTip = false

Vue.use(LmUi)

new Vue({
  render: (h) => h(App),
})
.$mount("#app")

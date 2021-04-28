import './fonts/font.scss'

const requireData = require.context('./', true, /index\.js$/)
// 组件数组
const components = []
// 导出的对象
const exportsObj = {}

requireData.keys().forEach(key => {
  let component = requireData(key)
  if (component && component.default && (component = component.default)) {
    components.push(component)
    exportsObj[component.name] = component
  }
})

const install = (Vue) => {
  if (install.installed) return
  components.forEach(comp => Vue.component(comp.name, comp))
}

if (typeof window !== undefined && window.Vue) {
  install(window.vue)
}

export default {
  install,
  ...exportsObj
}
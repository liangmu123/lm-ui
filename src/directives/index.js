import debounce from './debounce'

const directives = [
  debounce
]
// 导出的对象
const exportsObj = {}

directives.forEach(directive => {
  exportsObj[directive.name] = directive
})

const install = (Vue) => {
  if (install.installed) return
  directives.forEach(directive => Vue.directive(directive.name, directive))
}

if (typeof window !== undefined && window.Vue) {
  install(window.Vue)
}

exportsObj.install = install

export default exportsObj
import debounce from './src/debounce'

debounce.install = (Vue) => {
  Vue.directive(debounce.name, debounce)
}

export default debounce
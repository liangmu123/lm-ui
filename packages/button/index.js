import button from './src/button'

button.install = (Vue) => {
  Vue.component(button.name, button)
}

export default button
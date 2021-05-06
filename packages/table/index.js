import table from './src'

table.install = (Vue) => {
  Vue.component(table.name, table)
}

export default table
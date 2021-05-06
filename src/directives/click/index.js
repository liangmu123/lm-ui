import click from './src/click'

click.install = (Vue) => {
  Vue.directive(click.name, click)
}

export default click
import { Loading } from 'element-ui'
import merge from 'webpack-merge'
const isObject = (value) => Object.prototype.toString.call(value) === '[object Object]'
class CreateLoading {
  constructor (options) {
    this.options = options || { fullscreen: true }
    this.instance = null
    this.isSync = false
    this.start = this.start.bind(this)
    this.close = this.close.bind(this)
  }
  start (options={}) {
    if (!isObject(options)) {
      options = {
        target: options
      }
    }
    options = merge(this.options, options)
    this.isSync = true
    this.instance = Loading.service(options)
    Promise.resolve(this.isSync = false)
  }
  close () {
    if (this.isSync) {
      Promise.resolve(this.instance.close())
    } else {
      this.instance.close()
    }
  }
}

export default CreateLoading
import { LMFORMITEM } from './constant'

export default {
  name: 'lm-form',
  provide () {
    return {
      form: this
    }
  },
  props: {
    rules: {
      type: Object
    }
  },
  methods: {
    valicate (callback) {
      let children = this.catchChildren()
      let res = true
      let currentRes = null
      children.forEach(child => {
        currentRes = !child.valicate()
        if (res === true) {
          res = currentRes
        }
      })
      callback(res)
    },
    catchChildren (children = this.$children, childList = []) {
      let length = children && children.length
      if (length) {
        let child = null
        for (let i = 0; i < length; i++) {
          child = children[i]
          if (child.$options._componentTag === LMFORMITEM) {
            childList.push(child)
          } else if (child.$children) {
            this.catchChildren(child.$children, childList)
          }
        }
      }
      return childList
    }
  },
  render (_c) {
    return _c('div', this.$slots.default)
  }
}

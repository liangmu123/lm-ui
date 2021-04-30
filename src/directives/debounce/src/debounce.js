export default {
  name: 'debounce',
  inserted (el, binding, node) {
    let intervalTime = 2000
    const callback = binding.value
    let preTime = ''
    let fn = function () {
      let curTime = Date.now()
      if (!preTime || (curTime - preTime) > intervalTime) {
        callback()
      }
      preTime = Date.now()
    }
    el.eventListener = fn
    el.addEventListener('click', fn)
  },
  unbind (el, binding, node) {
    let fn = el.eventListener
    el.removeEventListener('click', fn)
  }
}

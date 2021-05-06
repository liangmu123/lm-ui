import Debounce from './Debounce'
import CreateLoading from './CreateLoading'

export default {
  name: 'click',
  inserted (el, binding, node) {
    let { debounce, loading } = binding.modifiers
    const callback = binding.value
    let eventListener = callback
    if (loading) {
      eventListener = function () {
        let loadingOption = binding.arg && binding.arg.loadingOption
        let { start, close } = new CreateLoading(loadingOption)
        callback(start, close)
      }
    }
    if (debounce) {
      eventListener = new Debounce().createDebounce(eventListener)
    }
    el.eventListener = eventListener
    el.addEventListener('click', eventListener)
  },
  unbind (el, binding, node) {
    let eventListener = el.eventListener
    el.removeEventListener('click', eventListener)
  }
}

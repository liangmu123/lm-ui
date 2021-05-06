class Debounce {
  constructor () {
    this.intervalTime = 1000
  }
  createDebounce (callback) {
    let self = this
    let preTime = ''
    let fn = function () {
      let curTime = Date.now()
      if (!preTime || (curTime - preTime) > self.intervalTime) {
        callback()
      }
      preTime = Date.now()
    }
    return fn
  }
}

export default Debounce
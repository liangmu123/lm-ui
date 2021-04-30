'use strict';

exports.__esModule = true;
exports.default = {
  name: 'debounce',
  inserted: function inserted(el, binding, node) {
    var intervalTime = 2000;
    var callback = binding.value;
    var preTime = '';
    var fn = function fn() {
      var curTime = Date.now();
      if (!preTime || curTime - preTime > intervalTime) {
        callback();
      }
      preTime = Date.now();
    };
    el.eventListener = fn;
    el.addEventListener('click', fn);
  },
  unbind: function unbind(el, binding, node) {
    var fn = el.eventListener;
    el.removeEventListener('click', fn);
  }
};
'use strict';

exports.__esModule = true;

var _Debounce = require('./Debounce');

var _Debounce2 = _interopRequireDefault(_Debounce);

var _CreateLoading = require('./CreateLoading');

var _CreateLoading2 = _interopRequireDefault(_CreateLoading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'click',
  inserted: function inserted(el, binding, node) {
    var _binding$modifiers = binding.modifiers,
        debounce = _binding$modifiers.debounce,
        loading = _binding$modifiers.loading;

    var callback = binding.value;
    var eventListener = callback;
    if (loading) {
      eventListener = function eventListener() {
        var loadingOption = binding.arg && binding.arg.loadingOption;

        var _ref = new _CreateLoading2.default(loadingOption),
            start = _ref.start,
            close = _ref.close;

        callback(start, close);
      };
    }
    if (debounce) {
      eventListener = new _Debounce2.default().createDebounce(eventListener);
    }
    el.eventListener = eventListener;
    el.addEventListener('click', eventListener);
  },
  unbind: function unbind(el, binding, node) {
    var eventListener = el.eventListener;
    el.removeEventListener('click', eventListener);
  }
};
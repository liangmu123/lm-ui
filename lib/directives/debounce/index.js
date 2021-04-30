'use strict';

exports.__esModule = true;

var _debounce = require('./src/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_debounce2.default.install = function (Vue) {
  Vue.directive(_debounce2.default.name, _debounce2.default);
};

exports.default = _debounce2.default;
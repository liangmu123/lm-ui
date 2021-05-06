'use strict';

exports.__esModule = true;

var _click = require('./src/click');

var _click2 = _interopRequireDefault(_click);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_click2.default.install = function (Vue) {
  Vue.directive(_click2.default.name, _click2.default);
};

exports.default = _click2.default;
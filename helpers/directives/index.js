'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _click = require('./click');

var _click2 = _interopRequireDefault(_click);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var directives = [_click2.default];
// 导出的对象
var exportsObj = {};

directives.forEach(function (directive) {
  exportsObj[directive.name] = directive;
});

var install = function install(Vue) {
  if (install.installed) return;
  directives.forEach(function (directive) {
    return Vue.directive(directive.name, directive);
  });
};

if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined && window.Vue) {
  install(window.Vue);
}

exportsObj.install = install;

exports.default = exportsObj;
'use strict';

exports.__esModule = true;

var _elementUi = require('element-ui');

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isObject = function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
};

var CreateLoading = function () {
  function CreateLoading(options) {
    _classCallCheck(this, CreateLoading);

    this.options = options || { fullscreen: true };
    this.instance = null;
    this.isSync = false;
    this.start = this.start.bind(this);
    this.close = this.close.bind(this);
  }

  CreateLoading.prototype.start = function start() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!isObject(options)) {
      options = {
        target: options
      };
    }
    options = (0, _webpackMerge2.default)(this.options, options);
    this.isSync = true;
    this.instance = _elementUi.Loading.service(options);
    Promise.resolve(this.isSync = false);
  };

  CreateLoading.prototype.close = function close() {
    if (this.isSync) {
      Promise.resolve(this.instance.close());
    } else {
      this.instance.close();
    }
  };

  return CreateLoading;
}();

exports.default = CreateLoading;
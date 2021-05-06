'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Debounce = function () {
  function Debounce() {
    _classCallCheck(this, Debounce);

    this.intervalTime = 1000;
  }

  Debounce.prototype.createDebounce = function createDebounce(callback) {
    var self = this;
    var preTime = '';
    var fn = function fn() {
      var curTime = Date.now();
      if (!preTime || curTime - preTime > self.intervalTime) {
        callback();
      }
      preTime = Date.now();
    };
    return fn;
  };

  return Debounce;
}();

exports.default = Debounce;
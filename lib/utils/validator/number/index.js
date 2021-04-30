"use strict";

exports.__esModule = true;
/**
 * 数字校验
 */

// 大于0且最多保留两位小数
var validate_more_zero_decimal = exports.validate_more_zero_decimal = function validate_more_zero_decimal(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  var reg = new RegExp("^((\\d.\\d{0," + digit + "})|([1-9]\\d*(\\.\\d{0," + digit + "})?))$");
  if (reg.test(value)) {
    return true;
  }
  return false;
};
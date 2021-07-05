'use strict';

exports.__esModule = true;
exports.default = convertCurrency;
function convertCurrency(money) {
  // 只接受正或负且最多保留四位小数的数字
  var reg = /^[+-]?(\d|([1-9]\d+))(\.\d{1,4})?$/;
  if (!reg.test(money)) {
    return '';
  }
  //最大处理的数字
  var maxNum = 999999999999999.9999;
  //输出的中文金额字符串
  var chineseStr = '';
  // 负数
  var negative = '负';
  var isNeedAddNegative = false;
  money = parseFloat(money);
  if (money >= maxNum) {
    //超出最大处理数字
    return '';
  }
  //汉字的数字
  var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
  //基本单位
  var cnIntRadice = new Array('', '拾', '佰', '仟');
  //对应整数部分扩展单位
  var cnIntUnits = new Array('', '万', '亿', '兆');
  //对应小数部分单位
  var cnDecUnits = new Array('角', '分', '毫', '厘');
  //整数金额时后面跟的字符
  var cnInteger = '整';
  //整型完以后的单位
  var cnIntLast = '元';
  //金额整数部分
  var integerNum = void 0;
  //金额小数部分
  var decimalNum = void 0;
  //分离金额后用的数组，预定义
  var parts = void 0;
  if (money < 0) {
    isNeedAddNegative = true;
    money = Math.abs(money);
  } else if (money === 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  //转换为字符串
  money = money.toString();
  if (money.indexOf('.') === -1) {
    integerNum = money;
    decimalNum = '';
  } else {
    parts = money.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  //获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    var zeroCount = 0;
    // 整数长度
    var IntLen = integerNum.length;
    for (var i = 0; i < IntLen; i++) {
      // 取出第一个
      var n = integerNum.substr(i, 1);
      var p = IntLen - i - 1;
      var q = p / 4;
      var m = p % 4;
      if (n === '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        //归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m == 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  //小数部分
  if (decimalNum !== '') {
    if (integerNum > 0 && integerNum.slice(-1) === '0' && decimalNum.slice(0, 1) !== '0') {
      chineseStr += cnNums[0];
    }
    var _zeroCount = 0;
    var decLen = decimalNum.length;
    for (var _i = 0; _i < decLen; _i++) {
      var _n = decimalNum.substr(_i, 1);
      if (_n === '0') {
        _zeroCount++;
      } else {
        if (_zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        //归零
        _zeroCount = 0;
        chineseStr += cnNums[Number(_n)] + cnDecUnits[_i];
      }
    }
    if (chineseStr.startsWith(cnNums[0])) {
      chineseStr = chineseStr.slice(1);
    }
  }
  if (chineseStr === '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum === '') {
    chineseStr += cnInteger;
  }
  // 是否为负数
  if (isNeedAddNegative) {
    chineseStr = negative + chineseStr;
  }
  return chineseStr;
}

// console.log(convertCurrency(0))
// console.log(convertCurrency(10011.03))
// console.log(convertCurrency(10010.13))
// console.log(convertCurrency(10010.03))
// console.log(convertCurrency(0.03))
// console.log(convertCurrency(0.13))
// console.log(convertCurrency(0.1306))
// console.log(convertCurrency(0.0006))
// console.log(convertCurrency(-0.0006))
// console.log(convertCurrency(0.13))
// console.log(convertCurrency(1.13))
// console.log(convertCurrency(1.03))
// console.log(convertCurrency(10010.00))
// console.log(convertCurrency(10010.60))
// console.log(convertCurrency(10101.60))
// console.log(convertCurrency(10101.06))
// console.log(convertCurrency(-101010101.0608))
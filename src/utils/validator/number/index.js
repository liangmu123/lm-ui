/**
 * 数字校验
 */

// 大于0且最多保留两位小数
export const validate_more_zero_decimal = (value, digit=2) => {
  let reg = new RegExp(`^((\\d\.\\d{0,${digit}})|([1-9]\\d*(\\.\\d{0,${digit}})?))$`)
  if (reg.test(value)) {
    return true
  }
  return false
}
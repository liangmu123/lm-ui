import { validate_more_zero_decimal } from '@/validator/number'

describe('validator/number/validate_more_zero_decimal', () => {
  it('校验是否是大于0的数字 且最多保留两位小数', () => {
    expect(validate_more_zero_decimal(1.00)).toEqual(true)
    expect(validate_more_zero_decimal(666)).toEqual(true)
    expect(validate_more_zero_decimal(9999.99)).toEqual(true)
    expect(validate_more_zero_decimal(-1)).toEqual(false)
    expect(validate_more_zero_decimal(1.001)).toEqual(false)
    expect(validate_more_zero_decimal(0)).toEqual(false)
  })
})

import convertCurrency from '@/utils/convertCurrency'

describe('金额转换测试', () => {
  it ('小写金额转大写', () => {
    expect(convertCurrency(101010.1)).toEqual('壹拾万零壹仟零壹拾元零壹角')
    expect(convertCurrency('1.0.0.1')).toEqual('')
  })
})
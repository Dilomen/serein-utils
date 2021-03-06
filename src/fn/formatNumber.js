import isNumber from '../base/isNumber'

/**
 * 分割数字千位符
 * @param {Number} num 
 */

function formatNumber(num) {
  if (!isNumber(num)) throw '传入的不是一个数字'
  num = num && num.toString()
  let dot = ''
  let [integerNum = '', decimalNum = ''] = num.split('.')
  if (decimalNum) dot = '.'
  // 匹配后面至少跟着一个3个数字为一组的数字: x(?=y) 匹配'x'仅仅当x后面跟着'y'
  integerNum = integerNum.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  return integerNum + dot + decimalNum
}

export default formatNumber
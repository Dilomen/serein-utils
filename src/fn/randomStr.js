/**
 * 生成11位包含字母或数字的随机字符串
 */
const createRandomStr = () =>
  Math.random()
    .toString(36)
    .slice(2);

/**
 * 生成指定位数的随机数
 * @param {Number} digit 指定位数，默认11位
 */
const randomStr = (digit = 11) => {
  const times = digit / 11
  let str = ''
  for (let i = 0; i < times; i++) {
    str += createRandomStr()
  }
  return str.slice(0, digit)
}

export default randomStr
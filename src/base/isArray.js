import toString from './toString'

/**
 * 是否是一个数组
 * @param {any} value 
 */
const isArray = value => {
  if (Array.isArray) {
    return Array.isArray(value)
  }
  return toString.call(value) === "[object Array]"
}

export default isArray
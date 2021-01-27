import isArray from './isArray'

/**
 * 是否是一个空数组
 * @param {any} value 
 */

const isEmtpyArr = value => {
  if (!isArray(value)) {
    throw 'This value is not an Array: ' + value
  }
  return value.length === 0
}

export default isEmtpyArr
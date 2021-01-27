import isObject from './isObject'

/**
 * 判断是否是空对象
 * @param {any} value 
 */
const isEmtpyObj = value => {
  if (!isObject(value)) {
    throw 'This value is not an Object: ' + value
  }
  return Object.keys(value).length === 0
}

export default isEmtpyObj
import isObject from './isObject'

/**
 * 是否是冻结对象
 * @param {Object} obj 
 */
function isFrozen (obj) {
  if (!obj || !isObject(obj)) { return false }
  return Object.isFrozen(obj)
}

export default isFrozen
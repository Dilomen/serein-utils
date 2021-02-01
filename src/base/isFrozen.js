/**
 * 是否是冻结对象
 * @param {any} obj 
 */
function isFrozen (obj) {
  return Object.isFrozen(obj)
}

export default isFrozen
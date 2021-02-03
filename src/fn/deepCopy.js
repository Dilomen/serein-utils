import isArray from '../base/isArray'

/**
 * 通过proxy代理，实现深拷贝
 * @param {*} value 
 */
function deepCopy (obj) {
  if (typeof obj !== 'object') return obj
  const copyObj = isArray(obj) ? [...obj] : { ...obj }

  function deepProxy (obj) {
    for (let key in obj) {

      if (typeof obj[key] === 'object') {
        obj[key] = deepCopy(obj[key]);
      }
    }
    return new Proxy(obj, {
      get: (obj, key) => {
        return copyObj[key] || obj[key]
      },
      set: (obj, key, value) => {
        copyObj[key] = value
      }
    })
  }
  deepProxy(copyObj)
  return copyObj
}

export default deepCopy
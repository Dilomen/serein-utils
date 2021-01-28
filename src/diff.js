import toString from './base/toString'
import isArray from './base/isArray'
import isMap from './base/isMap'
import isObject from './base/isObject'
import isSet from './base/isSet'
import hasOwnProperty from './base/hasOwnProperty'
import isFrozen from './base/isFrozen'

let diffContent = []
/**
 * 比较两个不同对象的差异
 * @param {Object} newValue 比较对象
 * @param {Object} oldValue 被比较对象
 * @param {Array} path 当前修改值的路径
 */
function diff (newValue, oldValue, path = [], isInit = true) {
  if (isInit) clearDiffContent()
  if (newValue === oldValue || isFrozen(newValue) || isFrozen(oldValue)) {
    return
  }
  const diffType = toString(newValue) !== toString(oldValue)
  const allNoObject = !isObject(newValue) && !isObject(oldValue)
  const isBaseTypeDiff = allNoObject && newValue !== oldValue
  const isSetOrMap = (isMap(newValue) && isMap(oldValue)) || (isSet(newValue) && isSet(oldValue))
  // 如果类型不一样或者两个不等的基本类型，Set，Map（复杂类型暂不处理）直接替换
  if (diffType || isBaseTypeDiff || isSetOrMap) {
    diffContent.push(replaceRecord([...path], oldValue, newValue))
    return
  }
  // 对于数组的处理
  if (isArray(newValue) && isArray(oldValue)) {
    const newValueLength = newValue.length
    const oldValueLength = oldValue.length
    const minLength = Math.min(newValueLength, oldValueLength)
    for (let i = 0; i < minLength; i++) {
      const newChild = newValue[i]
      const oldChild = oldValue[i]
      if (newChild === oldChild) continue
      const currentPath = [...path, i]
      if (!isObject(newChild) && !isObject(oldChild)) {
        diffContent.push(replaceRecord(currentPath, oldChild, newChild))
        continue
      }
      diff(newChild, oldChild, currentPath, false)
    }
    if (newValueLength === oldValueLength) return
    if (newValueLength > oldValueLength) {
      diffContent.push(addRecord([...path], newValue.slice(oldValueLength, newValueLength)))
    } else {
      diffContent.push(deleteRecord([...path], oldValue.slice(newValueLength, oldValueLength)))
    }
    return
  }
  const newKeyArr = Object.keys(newValue)
  const oldKeyArr = Object.keys(oldValue)
  const allKeys = new Set(Array.prototype.concat.call(newKeyArr, oldKeyArr))
  path.push('')
  // Set的forEech中的value和key是同一个值,这边选key主要是便于理解
  allKeys.forEach((value, key) => {
    const isNewKey = hasOwnProperty(newValue, key)
    const isOldKey = hasOwnProperty(oldValue, key)
    const newValueData = newValue[key]
    const oldValueData = oldValue[key]
    path[path.length - 1] = key
    // 需要深拷贝，因为是引用对象，后面的改变会触发这里的变化
    const currentPath = [...path]
    const allNoObject = !isObject(newValueData) && !isObject(oldValueData)
    if (isNewKey && !isOldKey) {
      diffContent.push(addRecord(currentPath, newValueData))
    } else if (!isNewKey && isOldKey) {
      diffContent.push(deleteRecord(currentPath, oldValueData))
    } else if (isNewKey && isOldKey) {
      // 两个都是基本类型
      if (allNoObject && newValueData !== oldValueData) {
        diffContent.push(replaceRecord(currentPath, oldValueData, newValueData))
      } else {
        diff(newValueData, oldValueData, currentPath)
      }
    }
  })
  return diffContent
}

function addRecord (path, data) {
  return {
    type: 'add',
    path: path,
    new: data
  }
}

function replaceRecord (path, oldValue, newValue) {
  return {
    type: 'replace',
    path: path,
    old: oldValue,
    new: newValue
  }
}

function deleteRecord (path, data) {
  return {
    type: 'delete',
    path: path,
    old: data
  }
}

export function clearDiffContent () {
  diffContent = []
}

function diffFn (newValue, oldValue) {
  return diff(newValue, oldValue, [], true)
}

export default diffFn
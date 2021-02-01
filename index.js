import hasOwnProperty from './src/base/hasOwnProperty.js'
import isArray from './src/base/isArray.js'
import isDate from './src/base/isDate.js'
import isEmtpyArr from './src/base/isEmtpyArr.js'
import isEmtpyObj from './src/base/isEmtpyObj.js'
import isFrozen from './src/base/isFrozen.js'
import isMap from './src/base/isMap.js'
import isNumber from './src/base/isNumber.js'
import isObject from './src/base/isObject.js'
import isSet from './src/base/isSet.js'
import toString from './src/base/toString.js'
import debounce from './src/debounce.js'
import deepCopy from './src/deepCopy.js'
import diff from './src/diff.js'
import addClass from './src/dom/addClass.js'
import getElementStyle from './src/dom/getElementStyle.js'
import getElementStyleValue from './src/dom/getElementStyleValue.js'
import getParentElement from './src/dom/getParentElement.js'
import getParentWithStyle from './src/dom/getParentWithStyle.js'
import getScrollHeight from './src/dom/getScrollHeight.js'
import getScrollTop from './src/dom/getScrollTop.js'
import loasdScript from './src/dom/loasdScript.js'
import nextElement from './src/dom/nextElement.js'
import preventDefault from './src/dom/preventDefault.js'
import readClass from './src/dom/readClass.js'
import removeClass from './src/dom/removeClass.js'
import replaceClass from './src/dom/replaceClass.js'
import stopPropagation from './src/dom/stopPropagation.js'
import blobToFile from './src/file/blobToFile.js'
import dataURLToBlob from './src/file/dataURLToBlob.js'
import dataURLtoFile from './src/file/dataURLtoFile.js'
import fileOrBlobToDataURL from './src/file/fileOrBlobToDataURL.js'
import fileToBlob from './src/file/fileToBlob.js'
import isMobile from './src/isMobile.js'
import queryAnalysis from './src/queryAnalysis.js'
import randomStr from './src/randomStr.js'
import sereinInstall from './src/sereinInstall.js'
import throttle from './src/throttle.js'
import tryFunc from './src/tryFunc.js'
import tryPromiseFunc from './src/tryPromiseFunc.js'
export {
  hasOwnProperty,
  isArray,
  isDate,
  isEmtpyArr,
  isEmtpyObj,
  isFrozen,
  isMap,
  isNumber,
  isObject,
  isSet,
  toString,
  debounce,
  deepCopy,
  diff,
  addClass,
  getElementStyle,
  getElementStyleValue,
  getParentElement,
  getParentWithStyle,
  getScrollHeight,
  getScrollTop,
  loasdScript,
  nextElement,
  preventDefault,
  readClass,
  removeClass,
  replaceClass,
  stopPropagation,
  blobToFile,
  dataURLToBlob,
  dataURLtoFile,
  fileOrBlobToDataURL,
  fileToBlob,
  isMobile,
  queryAnalysis,
  randomStr,
  sereinInstall,
  throttle,
  tryFunc,
  tryPromiseFunc
}
function install (Vue) {
  Vue.prototype._hasOwnProperty = hasOwnProperty
  Vue.prototype._isArray = isArray
  Vue.prototype._isDate = isDate
  Vue.prototype._isEmtpyArr = isEmtpyArr
  Vue.prototype._isEmtpyObj = isEmtpyObj
  Vue.prototype._isFrozen = isFrozen
  Vue.prototype._isMap = isMap
  Vue.prototype._isNumber = isNumber
  Vue.prototype._isObject = isObject
  Vue.prototype._isSet = isSet
  Vue.prototype._toString = toString
  Vue.prototype._debounce = debounce
  Vue.prototype._deepCopy = deepCopy
  Vue.prototype._diff = diff
  Vue.prototype._addClass = addClass
  Vue.prototype._getElementStyle = getElementStyle
  Vue.prototype._getElementStyleValue = getElementStyleValue
  Vue.prototype._getParentElement = getParentElement
  Vue.prototype._getParentWithStyle = getParentWithStyle
  Vue.prototype._getScrollHeight = getScrollHeight
  Vue.prototype._getScrollTop = getScrollTop
  Vue.prototype._loasdScript = loasdScript
  Vue.prototype._nextElement = nextElement
  Vue.prototype._preventDefault = preventDefault
  Vue.prototype._readClass = readClass
  Vue.prototype._removeClass = removeClass
  Vue.prototype._replaceClass = replaceClass
  Vue.prototype._stopPropagation = stopPropagation
  Vue.prototype._blobToFile = blobToFile
  Vue.prototype._dataURLToBlob = dataURLToBlob
  Vue.prototype._dataURLtoFile = dataURLtoFile
  Vue.prototype._fileOrBlobToDataURL = fileOrBlobToDataURL
  Vue.prototype._fileToBlob = fileToBlob
  Vue.prototype._isMobile = isMobile
  Vue.prototype._queryAnalysis = queryAnalysis
  Vue.prototype._randomStr = randomStr
  Vue.prototype._sereinInstall = sereinInstall
  Vue.prototype._throttle = throttle
  Vue.prototype._tryFunc = tryFunc
  Vue.prototype._tryPromiseFunc = tryPromiseFunc

}

export default install

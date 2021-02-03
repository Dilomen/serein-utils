import hasOwnProperty from './src/base/hasOwnProperty.js'
import isArray from './src/base/isArray.js'
import isDate from './src/base/isDate.js'
import isEmptyArr from './src/base/isEmptyArr.js'
import isEmptyObj from './src/base/isEmptyObj.js'
import isFrozen from './src/base/isFrozen.js'
import isMap from './src/base/isMap.js'
import isNumber from './src/base/isNumber.js'
import isObject from './src/base/isObject.js'
import isSet from './src/base/isSet.js'
import toString from './src/base/toString.js'
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
import debounce from './src/fn/debounce.js'
import deepCopy from './src/fn/deepCopy.js'
import diff from './src/fn/diff.js'
import randomStr from './src/fn/randomStr.js'
import throttle from './src/fn/throttle.js'
import tryFunc from './src/fn/tryFunc.js'
import tryPromiseFunc from './src/fn/tryPromiseFunc.js'
import isBrower from './src/isBrower.js'
import isMobile from './src/isMobile.js'
import queryAnalysis from './src/queryAnalysis.js'
export { hasOwnProperty,
isArray,
isDate,
isEmptyArr,
isEmptyObj,
isFrozen,
isMap,
isNumber,
isObject,
isSet,
toString,
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
debounce,
deepCopy,
diff,
randomStr,
throttle,
tryFunc,
tryPromiseFunc,
isBrower,
isMobile,
queryAnalysis }
function install(Vue) {
    Vue.prototype._hasOwnProperty = hasOwnProperty
  Vue.prototype._isArray = isArray
  Vue.prototype._isDate = isDate
  Vue.prototype._isEmptyArr = isEmptyArr
  Vue.prototype._isEmptyObj = isEmptyObj
  Vue.prototype._isFrozen = isFrozen
  Vue.prototype._isMap = isMap
  Vue.prototype._isNumber = isNumber
  Vue.prototype._isObject = isObject
  Vue.prototype._isSet = isSet
  Vue.prototype._toString = toString
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
  Vue.prototype._debounce = debounce
  Vue.prototype._deepCopy = deepCopy
  Vue.prototype._diff = diff
  Vue.prototype._randomStr = randomStr
  Vue.prototype._throttle = throttle
  Vue.prototype._tryFunc = tryFunc
  Vue.prototype._tryPromiseFunc = tryPromiseFunc
  Vue.prototype._isBrower = isBrower
  Vue.prototype._isMobile = isMobile
  Vue.prototype._queryAnalysis = queryAnalysis

}

export default install

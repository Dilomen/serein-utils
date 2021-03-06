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
import getParentElement from './src/dom/getParentElement.js'
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
import compose from './src/fn/compose.js'
import composeSync from './src/fn/composeSync.js'
import debounce from './src/fn/debounce.js'
import deepCopy from './src/fn/deepCopy.js'
import diff from './src/fn/diff.js'
import formatNumber from './src/fn/formatNumber.js'
import isBrower from './src/fn/isBrower.js'
import isMobile from './src/fn/isMobile.js'
import queryAnalysis from './src/fn/queryAnalysis.js'
import randomStr from './src/fn/randomStr.js'
import throttle from './src/fn/throttle.js'
import tryFunc from './src/fn/tryFunc.js'
import tryPromiseFunc from './src/fn/tryPromiseFunc.js'
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
getParentElement,
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
compose,
composeSync,
debounce,
deepCopy,
diff,
formatNumber,
isBrower,
isMobile,
queryAnalysis,
randomStr,
throttle,
tryFunc,
tryPromiseFunc }
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
  Vue.prototype._getParentElement = getParentElement
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
  Vue.prototype._compose = compose
  Vue.prototype._composeSync = composeSync
  Vue.prototype._debounce = debounce
  Vue.prototype._deepCopy = deepCopy
  Vue.prototype._diff = diff
  Vue.prototype._formatNumber = formatNumber
  Vue.prototype._isBrower = isBrower
  Vue.prototype._isMobile = isMobile
  Vue.prototype._queryAnalysis = queryAnalysis
  Vue.prototype._randomStr = randomStr
  Vue.prototype._throttle = throttle
  Vue.prototype._tryFunc = tryFunc
  Vue.prototype._tryPromiseFunc = tryPromiseFunc

}

export default install

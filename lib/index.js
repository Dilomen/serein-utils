/**
 * 将传入文件base64编码转成文件类型
 * @param {String} dataurl 传入的文件base64编码
 * @param {String} filename 文件名
 * @param {String} type 文件类型
 */
var dataURLtoFile = function dataURLtoFile(dataurl) {
  var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "file";
  var type = arguments.length > 2 ? arguments[2] : undefined;
  var arr = dataurl.split(",");
  var bstr = atob(arr[1]);
  !type && (type = arr[0].replace("data:", "").replace(";base64", ""));
  var n = bstr.length,
      u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, {
    type: type
  });
};
/**
 * DataURL转化为Blob对象
 * @param {String} dataurl
 */

var dataURLToBlob = function dataURLToBlob(dataurl) {
  var arr = dataurl.split(",");
  var bstr = atob(arr[1]);
  var n = bstr.length,
      u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob([u8arr]);
};
/**
 * 将blob转换成File文件
 * @param {Blob} blob
 * @param {String} filename
 * @param {String} type
 */

var blobToFile = function blobToFile(blob) {
  var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "file";
  var type = arguments.length > 2 ? arguments[2] : undefined;
  !type && console.error("请传入转化文件的类型type!!!");
  return new File([blob], filename, {
    type: type
  });
};
/**
 * File对象转换为DataUrl
 * @param {File | Blob} fileOrBlob
 */

var fileOrBlobToDataURL = function fileOrBlobToDataURL(fileOrBlob) {
  var fileReader = new FileReader();
  fileReader.readAsDataURL(fileOrBlob);
  return new Promise(function (resolve) {
    fileReader.onload = function (e) {
      resolve(e.target.result);
    };

    fileReader.onerror = function (err) {
      reject(err);
    };
  });
};
/**
 * File转化成Blob对象
 * @param {File} file
 */

var fileToBlob = function fileToBlob(file) {
  var fileReader = new FileReader();
  fileReader.readAsArrayBuffer(file);
  return new Promise(function (resolve, reject) {
    fileReader.onload = function (e) {
      resolve(new Blob([e.target.result], {
        type: file.type
      }));
    };

    fileReader.onerror = function (err) {
      reject(err);
    };
  });
};

// 防止冒泡
function stopPropagation(event) {
  event.stopPropagation();
} // 取消默认事件

function preventDefault(event) {
  event.preventDefault();
}
/**
 * 查看指定class名是否存在
 * @param {*} ele 指定元素
 * @param {*} className 指定元素的样式名
 */

function readClass(ele, className) {
  return ele.classList.contains(className);
}
/**
 * 添加样式
 * @param {*} ele 指定元素
 * @param {*} className 指定元素的样式名
 */

function addClass(ele, className) {
  ele.classList.add(className);
}
/**
 * 删除样式
 * @param {*} ele 指定元素
 * @param {*} className 指定元素的样式名
 */

function removeClass(ele, className) {
  ele.classList.remove(className);
}
/**
 * 获取当前元素的滚动高度， 默认（不传参）为整个页面的滚动高度
 */

function getScrollHeight(ele) {
  if (!ele || [window, document, document.body, document.documentElement].includes(ele)) return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);else {
    return ele.scrollHeight;
  }
}
/**
 * 获取当前元素的可视高度， 默认（不传参）为整个页面的可视高度
 */

function getClientHeight(ele) {
  if (!ele || [window, document, document.body, document.documentElement].includes(ele)) return Math.max(document.body.clientHeight, document.documentElement.clientHeight);else {
    return ele.clientHeight;
  }
}
/**
 * 获取当前元素的滚动值， 默认（不传参）为整个页面的滚动值
 * @param ele
 * @returns {number}
 */

function getScrollTop(ele) {
  if (!ele || [window, document, document.body, document.documentElement].includes(ele)) return Math.max(document.body.scrollTop, document.documentElement.scrollTop, window.scrollY);else {
    return ele.scrollTop;
  }
}
/**
 * 获取当前元素的css值
 * @param {*} ele  指定元素
 * @param {*} stylename
 */

function getElementStyleValue(ele, stylename) {
  if (!(ele instanceof HTMLElement)) throw new Error("请传入正确的DOM元素");
  return getComputedStyle ? getComputedStyle(ele).getPropertyValue(stylename) : ele.style.stylename;
}
/**
 * 获取父级元素
 * @param {*} ele 指定元素
 */

function getParentElement(ele) {
  if (!(ele instanceof HTMLElement)) throw new Error("请传入正确的元素");
  return ele.parentNode === document ? null : ele.parentNode;
}
/**
 * 查找带有某个style属性值为指定值的父元素或祖先元素
 * @param {HTMLElement} ele 指定元素
 * @param {Array} styleName 该元素指定的样式名称，一个满足就直接返回 如：["overflow", "overflow-x","overflow-y"]
 * @param {Array} styleValue 该元素指定样式的值，可以传入数组 如：["scroll", "auto"]
 */

function getParentWithStyle(ele, styleName, styleValue) {
  if (!(ele instanceof HTMLElement)) throw new Error("请传入正确的DOM元素");
  var parent = getParentElement(ele);

  while (parent) {
    if ([window, document, document.body, document.documentElement].includes(parent)) return window;
    var styleStr = "";

    for (var i = 0; i < styleName.length; i++) {
      styleStr += getElementStyleValue(parent, styleName[i]);
    }

    for (var _i = 0; _i < styleName.length; _i++) {
      if (styleStr.includes(styleValue[_i])) {
        return parent;
      }
    }

    parent = parent.parentNode;
  }

  return window;
}
/**
 * 加载script文件
 * @param {string} src
 */

function loasdScript(src) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");
    script.async = true;
    script.src = src;
    script.onload = resolve;

    script.onerror = function (error) {
      return reject(new Error("Unable to load " + src + ": " + error));
    };

    document.body.appendChild(script);
  });
}
function nextElement(el) {
  return el.nextElementSibling || nextSiblingWithElement(); // 过滤文本，注释节点

  function nextSiblingWithElement() {
    var sibling = el;

    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);

    return sibling;
  }
}
/**
 * 代理加载图片
 */
// let myImage = (function() {
//   let imgNode = document.createElement('img')
//   document.body.appendChild(imgNode);
//   return {
//     setSrc: function(src) {
//       imgNode.src = src;
//     }
//   }
// })()
// let proxyImage = (function() {
//   let img = new Image()
//   img.onload = function() {
//     myImage.setSrc(this.src)
//   }
//   return {
//     setSrc: function(src) {
//       myImage.setSrc('loading.gif')
//       img.src = src
//     }
//   }
// })
// export function lazyLoadImage(element) {
//   if (getScrollTop(element) <= getScrollTop()) {
//     element.setAttribute(src, element.getAttribute("data-src"));
//   }
// }

/**
 * 执行方法
 * @param func
 * @param params
 * @returns {*}
 */
var tryFunc = function tryFunc(func) {
  if (func instanceof Function) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    return func.apply(void 0, params);
  }

  return func;
};
/**
 * 执行promise方法
 * @param func 传入执行的函数
 * @param params 传入的参数
 * @returns {Promise<any>} 返回的Promise对象
 */

var tryPromiseFunc = function tryPromiseFunc(func) {
  for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    params[_key2 - 1] = arguments[_key2];
  }

  return new Promise(function (resolve, reject) {
    try {
      var res = tryFunc.apply(void 0, [func].concat(params));

      if (res instanceof Promise) {
        res.then(function (data) {
          return resolve(data);
        })["catch"](function (err) {
          return reject(err);
        });
      } else {
        resolve(res);
      }
    } catch (err) {
      reject(err);
    }
  });
};
/**
 * 获取url路径上的键值对
 * @param url
 * @return {URLSearchParams} 返回一个实例
 */

var searchParams = new URLSearchParams(location.search.replace(/\?/gi, ""));
/**
 * 生成10位包含字母或数字的随机字符串
 */

var createRandomStr = function createRandomStr() {
  return Math.random().toString(36).slice(2);
};

var toString = Object.prototype.toString; // 是否是一个数组

var isArray = function isArray(value) {
  return Array.isArray(value) || toString.call(value) === "[object Array]";
}; // 是否是一个对象

var isObject = function isObject(value) {
  return toString.call(value) === "[object Object]";
}; // 是否是一个空对象

var isEmtpyObj = function isEmtpyObj(value) {
  return isObject(value) && (JSON.stringify(value) === "{}" || Object.keys(value).length === 0);
}; // 是否是一个空数组

var isEmtpyArr = function isEmtpyArr(value) {
  return isArray(value) && value.length === 0;
}; // 是否是一个数字

var isNumber = function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}; // 转成字符串进行深复制，无法对undefined，function进行复制

var deepCopy = function deepCopy(value) {
  return JSON.parse(JSON.stringify(value));
};

export { addClass, blobToFile, createRandomStr, dataURLToBlob, dataURLtoFile, deepCopy, fileOrBlobToDataURL, fileToBlob, getClientHeight, getElementStyleValue, getParentElement, getParentWithStyle, getScrollHeight, getScrollTop, isArray, isEmtpyArr, isEmtpyObj, isNumber, isObject, loasdScript, nextElement, preventDefault, readClass, removeClass, searchParams, stopPropagation, tryFunc, tryPromiseFunc };

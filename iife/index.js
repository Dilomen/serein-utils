var darkUtils = (function (exports) {
  'use strict';

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
   * 查看样式
   * @param {*} element 指定元素
   * @param {*} className 指定元素的样式名
   */

  function readClass(element, className) {
    var classGroup = element.className;

    if (!classGroup) {
      throw new Error("该元素没有className");
    }

    var classArr = classGroup.split(" ");

    if (!classArr.includes(className)) {
      throw new Error("该元素没有指定的className");
    }

    return classGroup;
  }
  /**
   * 添加样式
   * @param {*} element 指定元素
   * @param {*} className 指定元素的样式名
   */

  function addClass(element, className) {
    element.classList.add(className);
  }
  /**
   * 删除样式
   * @param {*} element 指定元素
   * @param {*} className 指定元素的样式名
   */

  function removeClass(element, className) {
    element.classList.remove(className);
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
    var _console;

    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    (_console = console).log.apply(_console, ["a", func].concat(params));

    if (func instanceof Function) {
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
   * @return {Object} 返回键值对对象
   */

  var getParamsUrl = function getParamsUrl(url) {
    var paramsObj = {};
    var paramsString = url.split("?")[1];
    var params = paramsString.split("&");

    for (var i = 0; i < params.length; i++) {
      var param = params[i].split('=');
      paramsObj[param[0]] = param[1];
    }

    return paramsObj;
  };
  /**
   * 获取url路径上的键值对
   * @param url
   * @return {URLSearchParams} 返回一个实例
   */

  var searchParams = new URLSearchParams(location.search.replace(/\?/ig, ""));
  /**
   * 生成包含字母或数字的随机字符串
   */

  var createNonceStr = function createNonceStr() {
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

  exports.addClass = addClass;
  exports.blobToFile = blobToFile;
  exports.createNonceStr = createNonceStr;
  exports.dataURLToBlob = dataURLToBlob;
  exports.dataURLtoFile = dataURLtoFile;
  exports.deepCopy = deepCopy;
  exports.fileOrBlobToDataURL = fileOrBlobToDataURL;
  exports.fileToBlob = fileToBlob;
  exports.getParamsUrl = getParamsUrl;
  exports.isArray = isArray;
  exports.isEmtpyArr = isEmtpyArr;
  exports.isEmtpyObj = isEmtpyObj;
  exports.isNumber = isNumber;
  exports.isObject = isObject;
  exports.preventDefault = preventDefault;
  exports.readClass = readClass;
  exports.removeClass = removeClass;
  exports.searchParams = searchParams;
  exports.stopPropagation = stopPropagation;
  exports.tryFunc = tryFunc;
  exports.tryPromiseFunc = tryPromiseFunc;

  return exports;

}({}));

/**
 * 执行方法
 * @param func
 * @param params
 * @returns {*}
 */
export const tryFunc = (func, ...params) => {
  if (func instanceof Function) {
    return func(...params);
  }
  return func;
};

/**
 * 执行promise方法
 * @param func 传入执行的函数
 * @param params 传入的参数
 * @returns {Promise<any>} 返回的Promise对象
 */
export const tryPromiseFunc = (func, ...params) => {
  return new Promise((resolve, reject) => {
    try {
      const res = tryFunc(func, ...params);
      if (res instanceof Promise) {
        res.then(data => resolve(data)).catch(err => reject(err));
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
export const searchParams = function () {
  let params = {};
  let search = location.search;
  if (!search) return {};
  if (window.URLSearchParams) {
    let options = new URLSearchParams(search);
    for (let key of options.keys()) {
      params[key] = options.get(key);
    }
    return params
  }
  search = search.substring(1, search.length)
  search = search.split('&')
  search.forEach(item => {
    item = item.split('=');
    let [key, value] = item;
    if (!params[key]) {
      params[key] = value;
    }
  })
  return params;
}

/**
 * 生成10位包含字母或数字的随机字符串
 */
export const createRandomStr = () =>
  Math.random()
  .toString(36)
  .slice(2);

/**
 * 防抖:在一定时间内再次触发，会重新计算执行时间
 * @param {Function} fn 
 * @param {Number} delay 
 */
export const debounce = (fn, delay = 500) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay);
  }
}

/**
 * 节流:一段时间内只能执行一次
 * @param {Function} fn 
 * @param {Number} delay 
 */
export const throttle = (fn, delay = 500) => {
  let last;
  return function (...args) {
    let now = Date.now();
    if (!last) {
      fn.apply(this, args);
      last = now;
      return
    }
    if (last + delay <= now) {
      fn.apply(this, args);
      last = now;
    }
  }
}

/**
 * 判断是否是移动端
 */
export function isMobile() {
  var mobileArry = [
    "iPhone",
    "iPad",
    "Android",
    "Windows Phone",
    "BB10; Touch",
    "BB10; Touch",
    "PlayBook",
    "Nokia",
  ];
  var ua = navigator.userAgent;
  var res = mobileArry.filter(function (arr) {
    return ua.indexOf(arr) > 0;
  });
  return res.length > 0;
}

/**
 * 注册事件
 * @param Object {注册名称:注册事件}
 */
// export function emitter(options) {
//   if (!isObject(options)) throw new Error("请传入一个对象");
//   let listeners = {};

//   function on(name, fn) {
//     listeners[name] = fn;
//   }

//   function emit(name) {
//     if (!(name in listeners)) {
//       throw new Error("不存在");
//     }
//     let fns = listeners[name];
//     if (isArray(fns)) {
//       fns.forEach(fn => fn());
//     } else {
//       fns();
//     }
//   }
//   Object.keys(options).forEach(key => {
//     on(key, options[key]);
//   });
//   return {
//     emit
//   };
// }
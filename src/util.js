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
export const searchParams = new URLSearchParams(
  location.search.replace(/\?/gi, "")
);

/**
 * 生成10位包含字母或数字的随机字符串
 */
export const createRandomStr = () =>
  Math.random()
    .toString(36)
    .slice(2);

/**
 * 注册事件
 * @param Object {注册名称:注册事件}
 */
export function emitter(options) {
  if (!isObject(options)) throw new Error("请传入一个对象");
  let listeners = {};
  function on(name, fn) {
    listeners[name] = fn;
  }
  function emit(name) {
    if (!(name in listeners)) {
      throw new Error("不存在");
    }
    let fns = listeners[name];
    if (isArray(fns)) {
      fns.forEach(fn => fn());
    } else {
      fns();
    }
  }
  Object.keys(options).forEach(key => {
    on(key, options[key]);
  });
  return { emit };
}

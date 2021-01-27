import tryFunc from './tryFunc'
/**
 * 执行promise方法
 * @param func 传入执行的函数
 * @param params 传入的参数
 * @returns {Promise<any>} 返回的Promise对象
 */
const tryPromiseFunc = (func, ...params) => {
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

export default tryPromiseFunc

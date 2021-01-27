/**
 * 执行方法
 * @param func
 * @param params
 * @returns {*}
 */
const tryFunc = (func, ...params) => {
  if (func instanceof Function) {
    return func(...params);
  }
  return func;
};


export default tryFunc
/**
 * 节流:一段时间内只能执行一次
 * @param {Function} fn 
 * @param {Number} delay 
 */
const throttle = (fn, delay = 500) => {
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

export default throttle
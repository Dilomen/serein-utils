
/**
 * 防抖:在一定时间内再次触发，会重新计算执行时间
 * @param {Function} fn 
 * @param {Number} delay 
 */
const debounce = (fn, delay = 500) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay);
  }
}

export default debounce
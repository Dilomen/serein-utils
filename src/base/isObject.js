import toString from './toString'

/**
 * 是否是一个对象
 * @param {*} value 
 */
const isObject = value => toString.call(value) === "[object Object]";
export default isObject
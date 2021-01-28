import toString from './toString'

/**
 * 是否是一个数字
 * @param {*} value 
 */
const isNumber = value => toString(value) === "[object Number]";
export default isNumber
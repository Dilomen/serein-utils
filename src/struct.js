let toString = Object.prototype.toString;

// 是否是一个数组
export const isArray = value =>
  Array.isArray(value) || toString.call(value) === "[object Array]";

// 是否是一个对象
export const isObject = value => toString.call(value) === "[object Object]";

// 是否是一个空对象
export const isEmtpyObj = value =>
  isObject(value) &&
  (JSON.stringify(value) === "{}" || Object.keys(value).length === 0);

// 是否是一个空数组
export const isEmtpyArr = value => isArray(value) && value.length === 0;

// 是否是一个数字
export const isNumber = value => (typeof value === 'number') && !isNaN(value);

// 转成字符串进行深复制，无法对undefined，function进行复制
export const deepCopy = value => JSON.parse(JSON.stringify(value));


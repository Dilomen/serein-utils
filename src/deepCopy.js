/**
 * 转成字符串进行深复制，无法对undefined，function进行复制
 * @param {*} value 
 */
const deepCopy = value => JSON.parse(JSON.stringify(value));

export default deepCopy
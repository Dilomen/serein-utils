/**
 * 判断是否是日期格式
 * @param {String} data 
 */
function isDateFormat (data) {
  if(!data || isNaN(Date.parse(data))){
    return false
  }
  return true
}

export default isDateFormat
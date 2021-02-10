/**
 * 获取url路径上query的键值对，也可以获取hash模式的query
 * @param url
 * @return {URLSearchParams} 返回一个实例
 */
const queryAnalysis = function (isHash = false) {
  let params = {};
  let search = isHash ? location.hash : location.search;
  if (!search) return {};
  if (window.URLSearchParams) {
    let options = new URLSearchParams(search);
    for (let key of options.keys()) {
      params[key] = options.get(key);
    }
    return params
  }
  search = search.substring(1, search.length)
  search = search.split('&')
  search.forEach(item => {
    item = item.split('=');
    let [key, value] = item;
    if (!params[key]) {
      params[key] = value;
    }
  })
  return params;
}

export default queryAnalysis
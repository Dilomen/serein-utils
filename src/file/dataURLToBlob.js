/**
 * DataURL转化为Blob对象
 * @param {String} dataurl
 */
const dataURLToBlob = dataurl => {
  let arr = dataurl.split(",");
  let bstr = atob(arr[1]);
  let n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr]);
};

export default dataURLToBlob
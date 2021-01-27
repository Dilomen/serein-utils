/**
 * 将传入文件base64编码转成文件类型
 * @param {String} dataurl 传入的文件base64编码
 * @param {String} filename 文件名
 * @param {String} type 文件类型
 */
const dataURLtoFile = (dataurl, filename = "file", type) => {
  let arr = dataurl.split(",");
  let bstr = atob(arr[1]);
  !type && (type = arr[0].replace("data:", "").replace(";base64", ""));
  let n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {
    type
  });
};

export default dataURLtoFile
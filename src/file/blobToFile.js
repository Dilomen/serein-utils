/**
 * 将blob转换成File文件
 * @param {Blob} blob
 * @param {String} filename
 * @param {String} type
 */
const blobToFile = (blob, filename = "file", type) => {
  if (!type) {
    throw new Error("请传入转化文件的类型type!!!")
  }
  return new File([blob], filename, {
    type
  });
};

export default blobToFile
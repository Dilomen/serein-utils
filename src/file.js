/**
 * 将传入文件base64编码转成文件类型
 * @param {String} dataurl 传入的文件base64编码
 * @param {String} filename 文件名
 * @param {String} type 文件类型
 */
export const dataURLtoFile = (dataurl, filename = "file", type) => {
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

/**
 * DataURL转化为Blob对象
 * @param {String} dataurl
 */
export const dataURLToBlob = dataurl => {
  let arr = dataurl.split(",");
  let bstr = atob(arr[1]);
  let n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr]);
};
/**
 * 将blob转换成File文件
 * @param {Blob} blob
 * @param {String} filename
 * @param {String} type
 */
export const blobToFile = (blob, filename = "file", type) => {
  if (!type) {
    throw new Error("请传入转化文件的类型type!!!")
  }
  return new File([blob], filename, {
    type
  });
};

/**
 * File对象转换为DataUrl
 * @param {File | Blob} fileOrBlob
 */
export const fileOrBlobToDataURL = fileOrBlob => {
  var fileReader = new FileReader();
  fileReader.readAsDataURL(fileOrBlob);
  return new Promise((resolve, reject) => {
    fileReader.onload = function (e) {
      resolve(e.target.result);
    };
    fileReader.onerror = err => {
      reject(err);
    };
  });
};

/**
 * File转化成Blob对象
 * @param {File} file
 */
export const fileToBlob = file => {
  let fileReader = new FileReader();
  fileReader.readAsArrayBuffer(file);
  return new Promise((resolve, reject) => {
    fileReader.onload = e => {
      resolve(
        new Blob([e.target.result], {
          type: file.type
        })
      );
    };
    fileReader.onerror = err => {
      reject(err);
    };
  });
};
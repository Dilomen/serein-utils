/**
 * File对象转换为DataUrl
 * @param {File | Blob} fileOrBlob
 */
const fileOrBlobToDataURL = fileOrBlob => {
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

export default fileOrBlobToDataURL
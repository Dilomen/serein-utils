/**
 * File转化成Blob对象
 * @param {File} file
 */
const fileToBlob = file => {
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

export default fileToBlob
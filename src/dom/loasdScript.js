
/**
 * 加载script文件
 * @param {string} src
 */
function loasdScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.async = true;
    script.src = src;

    script.onload = resolve;
    script.onerror = (error) =>
      reject(new Error("Unable to load " + src + ": " + error));

    document.body.appendChild(script);
  });
}

export default loasdScript 
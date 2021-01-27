
/**
 * 获取元素的样式值
 * @export
 * @param {Element} el 指定元素
 * @param {string} attr 指定样式属性
 * @param {string} pseudoElt 可选 伪元素
 */
function getElementStyle(el, attr, pseudoElt) {
  if (pseudoElt) {
    let obj = getComputedStyle(el, pseudoElt);
    return obj[attr];
  }
  if (el && el.style && el.style[attr]) {
    return el.style[attr];
  }
  return (getComputedStyle(el) || {})[attr];
}

export default getElementStyle
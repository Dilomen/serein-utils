
/**
 * 获取下一个兄弟元素
 * @param {*} ele 指定元素
 */
function nextElement(el) {
  return el.nextElementSibling || nextSiblingWithElement();
  // 过滤文本，注释节点
  function nextSiblingWithElement() {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

export default nextElement 
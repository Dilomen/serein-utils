
/**
 * 获取父级元素
 * @param {*} ele 指定元素
 */
function getParentElement(ele) {
  if (!(ele instanceof HTMLElement)) throw new Error("请传入正确的元素");
  return ele.parentNode === document ? null : ele.parentNode;
}

export default getParentElement 
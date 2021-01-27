
/**
 * 获取当前元素的css值
 * @param {*} ele  指定元素
 * @param {*} stylename
 */
function getElementStyleValue(ele, stylename) {
  if (!(ele instanceof HTMLElement)) throw new Error("请传入正确的DOM元素");
  return getComputedStyle
    ? getComputedStyle(ele).getPropertyValue(stylename)
    : ele.style.stylename;
}

export default getElementStyleValue
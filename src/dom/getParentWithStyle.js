import getParentElement from './getParentElement'
import getElementStyleValue from './getElementStyleValue'
/**
 * 查找带有某个style属性值为指定值的父元素或祖先元素
 * @param {HTMLElement} ele 指定元素
 * @param {Array} styleName 该元素指定的样式名称，一个满足就直接返回 如：["overflow", "overflow-x","overflow-y"]
 * @param {Array} styleValue 该元素指定样式的值，可以传入数组 如：["scroll", "auto"]
 */
function getParentWithStyle (ele, styleName, styleValue) {
  if (!(ele instanceof HTMLElement)) throw new Error("请传入正确的DOM元素");
  let parent = getParentElement(ele);
  while (parent) {
    if (
      [window, document, document.body, document.documentElement].includes(
        parent
      )
    )
      return window;
    let styleStr = "";
    for (let i = 0; i < styleName.length; i++) {
      styleStr += getElementStyleValue(parent, styleName[i]);
    }
    for (let i = 0; i < styleName.length; i++) {
      if (styleStr.includes(styleValue[i])) {
        return parent;
      }
    }
    parent = parent.parentNode;
  }
  return window;
}

export default getParentWithStyle 
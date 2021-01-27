
/**
 * 获取当前元素的滚动值， 默认（不传参）为整个页面的滚动值
 * @param ele
 * @returns {number}
 */

function getScrollTop(ele) {
  if (
    !ele ||
    [window, document, document.body, document.documentElement].includes(ele)
  )
    return Math.max(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      window.scrollY
    );
  else {
    return ele.scrollTop;
  }
}

export default getScrollTop
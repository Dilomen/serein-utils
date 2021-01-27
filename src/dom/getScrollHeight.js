/**
 * 获取当前元素的滚动高度， 默认（不传参）为整个页面的滚动高度
 */
function getScrollHeight (ele) {
  if (
    !ele ||
    [window, document, document.body, document.documentElement].includes(ele)
  )
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
  else {
    return ele.scrollHeight;
  }
}

export default getScrollHeight
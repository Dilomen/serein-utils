// 防止冒泡
export function stopPropagation(event) {
  event.stopPropagation()
}

// 取消默认事件
export function preventDefault(event) {
  event.preventDefault()
}

/**
 * 查看样式
 * @param {*} element 指定元素
 * @param {*} className 指定元素的样式名
 */
export function readClass(element, className) {
  let classGroup = element.className
  if (!classGroup) {
    throw new Error("该元素没有className")
  }
  let classArr = classGroup.split(" ")
  if (!classArr.includes(className)) {
    throw new Error("该元素没有指定的className")
  }
  return classGroup
}

/**
 * 添加样式
 * @param {*} element 指定元素
 * @param {*} className 指定元素的样式名
 */
export function addClass(element, className) {
  element.classList.add(className)
}

/**
 * 删除样式
 * @param {*} element 指定元素
 * @param {*} className 指定元素的样式名
 */
export function removeClass(element, className) {
  element.classList.remove(className)
}

/**
 * 修改样式
 * @param {*} element 指定元素
 * @param {*} className 指定元素的样式名
 * @param {*} replaceClassName 指定元素需要替换的样式名
 */
export function replaceClass(element, className, replaceClassName) {
  element.classList.replace(className, replaceClassName)
}

/**
 * 获取当前元素的滚动高度， 默认（不传参）为整个页面的滚动高度
 */
export function getScrollHeight(element) {
  if (!element || [window, document, document.body, document.documentElement].includes(element))
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
  else {
    return element.scrollHeight
  }
}

/**
 * 获取当前元素的可视高度， 默认（不传参）为整个页面的可视高度
 */

export function getClientHeight(element) {
  if (!element || [window, document, document.body, document.documentElement].includes(element))
    return Math.max(document.body.clientHeight, document.documentElement.clientHeight)
  else {
    return element.clientHeight
  }
}

/**
 * // 获取当前元素的滚动值， 默认（不传参）为整个页面的滚动值
 * @param element
 * @returns {number}
 */

export function getScrollTop(element) {
  if (!element || [window, document, document.body, document.documentElement].includes(element))
    return Math.max(document.body.scrollTop, document.documentElement.scrollTop, window.scrollY)
  else {
    return element.scrollTop
  }
}

/**
 * 获取当前元素的css值
 * @param {*} element  指定元素
 * @param {*} stylename
 */
export function getElementStyleValue(element, stylename) {
  if (!(element instanceof HTMLElement)) throw new Error("请传入正确的DOM元素")
  return getComputedStyle ? getComputedStyle(element).getPropertyValue(stylename) : element.style.stylename
}

/**
 * 查找带有某个style属性值为指定值的父元素或祖先元素
 * @param {HTMLElement} element 指定元素
 * @param {Array} styleName 该元素指定的样式名称，一个满足就直接返回 如：["overflow", "overflow-x","overflow-y"]
 * @param {Array} styleValue 该元素指定样式的值，可以传入数组 如：["scroll", "auto"]
 */
export function getParentWithStyle(element, styleName, styleValue) {
  if (!(element instanceof HTMLElement)) throw new Error("请传入正确的DOM元素")
  let parent = element.parentNode
  while (parent) {
    if ([window, document, document.body, document.documentElement].includes(parent)) return window
    let styleStr = ""
    for (let i = 0; i < styleName.length; i++) {
      styleStr += getElementStyleValue(parent, styleName[i])
    }
    for (let i = 0; i < styleName.length; i++) {
      if (styleStr.includes(styleValue[i])) {
        return parent
      }
    }
    parent = parent.parentNode
  }
  return window
}

/**
 * 加载script文件
 * @param {string} src
 */
export function loasdScript(src) {
  return new Promise((resolve, reject) => {
      let script = document.createElement('script');
      script.async = true;
      script.src = src;

      script.onload = resolve;
      script.onerror = error => reject(new Error('Unable to load ' + src));

      document.body.appendChild(script);
  })
}

/**
 * 代理加载图片
 */
// let myImage = (function() {
//   let imgNode = document.createElement('img')
//   document.body.appendChild(imgNode);
//   return {
//     setSrc: function(src) {
//       imgNode.src = src;
//     }
//   }
// })()

// let proxyImage = (function() {
//   let img = new Image()
//   img.onload = function() {
//     myImage.setSrc(this.src)
//   }
//   return {
//     setSrc: function(src) {
//       myImage.setSrc('loading.gif')
//       img.src = src
//     }
//   }
// })

// export function lazyLoadImage(element) {
//   if (getScrollTop(element) <= getScrollTop()) {
//     element.setAttribute(src, element.getAttribute("data-src"));
//   }
// }
// 防止冒泡
export function stopPropagation(event) {
  event.stopPropagation();
}

// 取消默认事件
export function preventDefault(event) {
  event.preventDefault();
}

/**
 * 查看指定class名是否存在
 * @param {*} ele 指定元素
 * @param {*} className 指定元素的样式名
 */
export function readClass(ele, className) {
  return ele.classList.contains(className);
}

/**
 * 添加样式
 * @param {*} ele 指定元素
 * @param {*} className 指定元素的样式名
 */
export function addClass(ele, className) {
  ele.classList.add(className);
}

/**
 * 删除样式
 * @param {*} ele 指定元素
 * @param {*} className 指定元素的样式名
 */
export function removeClass(ele, className) {
  ele.classList.remove(className);
}

/**
 * 替换样式
 * @param {*} ele 指定元素
 * @param {*} oldClass 指定元素的样式名
 * @param {*} newClass 指定元素需要替换的样式名
 */
export function replaceClass(ele, oldClass, newClass) {
  ele.classList.replace(oldClass, newClass);
}

/**
 * 获取当前元素的滚动高度， 默认（不传参）为整个页面的滚动高度
 */
export function getScrollHeight(ele) {
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

/**
 * 获取当前元素的可视高度， 默认（不传参）为整个页面的可视高度
 */

export function getClientHeight(ele) {
  if (
    !ele ||
    [window, document, document.body, document.documentElement].includes(ele)
  )
    return Math.max(
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  else {
    return ele.clientHeight;
  }
}

/**
 * 获取当前元素的滚动值， 默认（不传参）为整个页面的滚动值
 * @param ele
 * @returns {number}
 */

export function getScrollTop(ele) {
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

/**
 * 获取当前元素的css值
 * @param {*} ele  指定元素
 * @param {*} stylename
 */
export function getElementStyleValue(ele, stylename) {
  if (!(ele instanceof HTMLElement)) throw new Error("请传入正确的DOM元素");
  return getComputedStyle
    ? getComputedStyle(ele).getPropertyValue(stylename)
    : ele.style.stylename;
}

/**
 * 获取父级元素
 * @param {*} ele 指定元素
 */
export function getParentElement(ele) {
  if (!(ele instanceof HTMLElement)) throw new Error("请传入正确的元素");
  return ele.parentNode === document ? null : ele.parentNode;
}

/**
 * 查找带有某个style属性值为指定值的父元素或祖先元素
 * @param {HTMLElement} ele 指定元素
 * @param {Array} styleName 该元素指定的样式名称，一个满足就直接返回 如：["overflow", "overflow-x","overflow-y"]
 * @param {Array} styleValue 该元素指定样式的值，可以传入数组 如：["scroll", "auto"]
 */
export function getParentWithStyle(ele, styleName, styleValue) {
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

/**
 * 加载script文件
 * @param {string} src
 */
export function loasdScript(src) {
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

/**
 * 获取下一个兄弟元素
 * @param {*} ele 指定元素
 */
export function nextElement(el) {
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

/**
 * 获取元素的样式值
 * @export
 * @param {Element} el 指定元素
 * @param {string} attr 指定样式属性
 * @param {string} pseudoElt 可选 伪元素
 */
export function getElementStyle(el, attr, pseudoElt) {
  if (pseudoElt) {
    let obj = getComputedStyle(el, pseudoElt);
    return obj[attr];
  }
  if (el && el.style && el.style[attr]) {
    return el.style[attr];
  }
  return (getComputedStyle(el) || {})[attr];
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

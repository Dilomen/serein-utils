/**
 * 替换样式
 * @param {*} ele 指定元素
 * @param {*} oldClass 指定元素的样式名
 * @param {*} newClass 指定元素需要替换的样式名
 */
function replaceClass(ele, oldClass, newClass) {
  if (!(ele instanceof HTMLElement)) throw `第一个参数必须是一个HTML元素节点，而不是${ele}`
  if (!oldClass) throw '传入的需要被替换的className为空'
  if (!newClass) throw '传入的需要替换的className为空'
  ele.classList.replace(oldClass, newClass);
}

export default replaceClass
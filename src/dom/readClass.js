/**
 * 查看指定class名是否存在
 * @param {*} ele 指定元素
 * @param {*} className 指定元素的样式名
 */
function readClass(ele, className) {
  if (!(ele instanceof HTMLElement)) throw `第一个参数必须是一个HTML元素节点，而不是${ele}`
  if (!className) throw '传入的className为空'
  return ele.classList.contains(className);
}

export default readClass

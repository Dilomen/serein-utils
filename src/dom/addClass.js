/**
 * 添加样式
 * @param {*} ele 指定元素
 * @param {*} className 指定元素的样式名
 */
function addClass(ele, className) {
  if (!(ele instanceof HTMLElement)) throw `第一个参数必须是一个HTML元素节点，而不是${ele}`
  if (!className) throw '传入的className为空'
  ele.classList.add(className);
}

export default addClass
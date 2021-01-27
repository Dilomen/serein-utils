// 取消默认事件
function preventDefault(event) {
  if (!event) throw '传参event不存在'
  event.preventDefault();
}

export default preventDefault
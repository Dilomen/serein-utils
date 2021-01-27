// 防止冒泡
function stopPropagation(event) {
  if (!event) throw '传参event不存在'
  event.stopPropagation();
}

export default stopPropagation
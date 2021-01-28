function hasOwnProperty (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}
export default hasOwnProperty
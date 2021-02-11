import tryPromiseFunc from './tryPromiseFunc'
/**
 * 异步复合函数
 */
function compose () {
  const args = [...arguments]
  const len = args.length - 1
  return async function (data) {
    let promiseFn = tryPromiseFunc(args[len], data)
    for (let i = len; i > 0; i--) {
      promiseFn = promiseFn.then((res) => {
        return tryPromiseFunc(args[i - 1], res)
      })
    }
    return promiseFn
  }
}

export default compose
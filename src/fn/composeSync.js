import tryFunc from './tryFunc'
/**
 * 同步复合函数
 */
function composeSync() {
  const args = [...arguments];
  return function(data) {
    return args.reduceRight(function(res, cb) {
      return tryFunc(cb, res);
    }, data);
  };
}

export default composeSync
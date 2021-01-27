const fs = require('fs')
const path = require('path')
let str = ''
let dependencies = []
function dependenyFile (filePath) {
  const files = fs.readdirSync(filePath);
  files.forEach(function (item) {
    let fPath = path.join(filePath, item);
    const stat = fs.statSync(fPath);
    if (stat.isDirectory()) {
      dependenyFile(fPath)
    }
    const dependenyName = item.replace('.js', '')
    if (stat.isFile()) {
      dependencies.push(dependenyName)
      fPath = fPath.replace(/\S*src/, './src')
      str += `import ${dependenyName} from '${fPath}'\n`
    }
  });
}
const filePath = path.resolve(process.cwd(), './src')

dependenyFile(filePath)
str += `export { ${dependencies.join(',\n')} }`

fs.writeFileSync(path.resolve(process.cwd(), './index.js'), str, 'utf-8')
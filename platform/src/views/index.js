const path = require('path')
const defaultMd = require.context('./default', false, /\.md$/)
const base = require.context('./base', false, /\.md$/)
const file = require.context('./file', false, /\.md$/)
const fn = require.context('./fn', false, /\.md$/)
const modules = {}
function handleFile (files) {
  files.keys().forEach(key => {
    const name = path.basename(key, '.md')
    modules[name] = files(key).default || files(key)
  })
}

handleFile(defaultMd)
handleFile(base)
handleFile(file)
handleFile(fn)
export default modules
const path = require('path')
const fs = require('fs')

function getComponentEntries (packagePath) {
  let absPath = path.resolve(process.cwd(), packagePath)
  let files = fs.readdirSync(absPath)
  const componentEntries = {}
  files.forEach(file => {
    const filePath = './' + path.posix.join(packagePath, file, 'index.js')
    componentEntries[file] = filePath
  })
  return componentEntries
}

module.exports = {
  getComponentEntries
}
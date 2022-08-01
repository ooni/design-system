/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const glob = require('glob')
const path = require('path')

const inputRootDir = path.join(__dirname, '..')
const outputRootDir = path.join(__dirname, '..')

const dirPath = `${inputRootDir}/components/icons/*.tsx`

const genIndex = () => {
  glob(dirPath, (err, icons) => {
    let data = icons
      .map((iconPath) => {
        const name = path.basename(iconPath, '.tsx')
        const loc = `./${path.basename(iconPath).replace('.tsx', '')}`
        return `export { default as ${name} } from '${loc}'`
      })
      .join('\n')
    data += '\n'

    const dstPath = path.join(outputRootDir, 'components', 'icons', 'index.ts')
    fs.writeFileSync(dstPath, data, 'utf-8')
    console.log(path.relative('.', dstPath))
  })
}

genIndex()

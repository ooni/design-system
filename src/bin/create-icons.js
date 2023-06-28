/* global require, __dirname */
/* eslint-disable no-console */
// Inspired from: https://github.com/react-icons/react-icons and changed

const fs = require('fs')
const cheerio = require('cheerio')
const glob = require('glob')
const path = require('path')
const inputRootDir = path.join(__dirname, '../..')
const outputRootDir = path.join(__dirname, '..')
const attrs = ['xlink:href', 'clip-path', 'fill-opacity', 'fill']

let components = {}

var cleanAtrributes = function ($el, $) {
  attrs.forEach(function (attr) {
    $el.removeAttr(attr)
  })

  // This is done to remove the clip-path from the svg
  var style = $el.attr('style')
  if (style) {
    style = style.replace(/clip-path:\s+[^;]+/g, '')
    $el.attr('style', style)
    if (style === '') {
      $el.removeAttr('style')
    }
  }

  if ($el.children().length === 0) {
    return false
  }

  $el.children().each(function (index, el) {
    cleanAtrributes($(el), $)
  })
}

var cleanClipPath = function ($el, $) {
  $('clipPath', $el).remove()
}

glob(inputRootDir + '/svgs/icons/*.svg', function (err, icons) {
  icons.forEach(function (iconPath) {
    var name = path.basename(iconPath, '.svg')
    var svg = fs.readFileSync(iconPath, 'utf-8')
    const $ = cheerio.load(svg, {
      xmlMode: true,
    })
    var $svg = $('svg')
    cleanAtrributes($svg, $)
    cleanClipPath($svg, $)
    var iconSvg = $svg.html()
    var viewBox = $svg.attr('viewBox')
    var dstPath = path.join(outputRootDir, 'components', 'icons', `${name}.tsx`)
    components[name] = dstPath
    var component = `import React from 'react'
import { IconBase, IconType } from 'react-icons'
const ${name}: IconType = (props) => (
  <IconBase viewBox="${viewBox}" {...props}>
    <g>${iconSvg}</g>
  </IconBase>
)
export default ${name}
`

    fs.writeFileSync(dstPath, component, 'utf-8')
    console.log(path.relative('.', dstPath))
  })

  const iconsModule =
    Object.keys(components)
      .map((name) => {
        const compPath = components[name]
        const loc = `./${path.basename(compPath).replace('.tsx', '')}`
        return `export { default as ${name} } from '${loc}'`
      })
      .join('\n') + '\n'
  const dstPath = path.join(outputRootDir, 'components', 'icons', 'index.ts')
  fs.writeFileSync(dstPath, iconsModule, 'utf-8')
  console.log(path.relative('.', dstPath))
})

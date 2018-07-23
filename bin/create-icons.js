/* global require, __dirname */
// Inspired from: https://github.com/react-icons/react-icons and changed

const fs = require('fs')
const cheerio = require('cheerio')
const glob = require('glob')
const path = require('path')
const rootDir = path.join(__dirname, '..')
const attrs = ['xlink:href', 'clip-path', 'fill-opacity', 'fill']

let components = {}

var cleanAtrributes = function($el, $) {
  attrs.forEach(function(attr) {
    $el.removeAttr(attr)
  })

  // This is done to remove the clip-path from the svg
  var style = $el.attr('style')
  if (style) {
    style = style.replace(/clip-path: \w+;?/g, '')
    $el.attr('style', style)
  }

  if($el.children().length === 0) {
    return false
  }

  $el.children().each(function(index, el) {
    cleanAtrributes($(el), $)
  })
}

var cleanClipPath = function($el, $) {
  $('clipPath', $el).remove()
}

glob(rootDir + '/components/svgs/icons/*/*.svg', function(err, icons) {
  icons.forEach(function(iconPath) {
    var name = path.basename(iconPath, '.svg')
    var svg = fs.readFileSync(iconPath, 'utf-8')
    const $ = cheerio.load(svg,{
      xmlMode: true
    })
    var $svg = $('svg')
    cleanAtrributes($svg, $)
    cleanClipPath($svg, $)
    var iconSvg = $svg.html()
    var viewBox = $svg.attr('viewBox')
    var dstPath = path.join(rootDir, 'components', 'icons', `${name}.js`)
    components[name] = dstPath
    var component = `import React from 'react'
import Icon from 'react-icon-base'
const ${name} = props => (
  <Icon viewBox="${viewBox}" {...props}>
    <g>${iconSvg}</g>
  </Icon>
)
export default ${name}
`

    fs.writeFileSync(dstPath, component, 'utf-8')
    console.log(path.relative('.', dstPath))
  })

  const iconsModule = Object.keys(components).map(name => {
    const compPath = components[name]
    const loc = `./${path.basename(compPath).replace('.js', '')}`
    return `export { default as ${name} } from ${loc}`
  }).join('\n') + '\n'
  const dstPath = path.join(rootDir, 'components', 'icons', 'index.js')
  fs.writeFileSync(dstPath, iconsModule, 'utf-8')
  console.log(path.relative('.', dstPath))
})

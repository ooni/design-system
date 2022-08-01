/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-var-requires */

// import svgr from '@svgr/core'

const { transform } = require('@svgr/core')
const fs = require('fs')
const glob = require('glob')
const path = require('path')

const inputRootDir = path.join(__dirname, '../..')
const outputRootDir = path.join(__dirname, '..')

const dirPath = `${inputRootDir}/svgs/icons/*.svg`

const components = {}

glob(dirPath, (err, icons) => {
  icons.forEach((iconPath) => {
    const name = path.basename(iconPath, '.svg')

    const svg = fs.readFileSync(iconPath, 'utf-8')

    transform(svg, {
      componentName: name,
      prettier: false,
      typescript: true,

      svgo: true,
      dimensions: false,
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
          {
            name: 'removeAttrs',
            params: {
              attrs: '(style|enable-background|id|data-name)',
            },
          },
          'removeDimensions',
          'removeStyleElement',
          'removeTitle',
        ],
      },
    }).then((jsCode) => {
      const dstPath = path.join(
        outputRootDir,
        'components',
        'icons',
        `${name}.tsx`
      )
      components[name] = dstPath
      fs.writeFileSync(dstPath, jsCode, 'utf-8')
      console.log(path.relative('.', dstPath))
    })
  })
})

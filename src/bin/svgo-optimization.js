/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const glob = require('glob')
const path = require('path')
const { optimize } = require('svgo')

const inputRootDir = path.join(__dirname, '../..')
const outputRootDir = path.join(__dirname, '../../svgs/temp-icons')

const dirPath = `${inputRootDir}/svgs/icons/*.svg`

glob(dirPath, (err, icons) => {
  icons.forEach((iconPath) => {
    const name = path.basename(iconPath, '.svg')

    const svg = fs.readFileSync(iconPath, 'utf-8')

    const result = optimize(svg, {
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
            attrs: '(style|enable-background)',
          },
        },
        'removeDimensions',
        'removeStyleElement',
      ],
    })
    const optimizedSvgString = result.data

    const dstPath = path.join(outputRootDir, `${name.replace('.min', '')}.svg`)
    fs.writeFileSync(dstPath, optimizedSvgString, 'utf-8')
    console.log(path.relative('.', dstPath))
  })
})

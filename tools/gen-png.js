var commander = require('commander')
var Rsvg = require('librsvg').Rsvg
var fs = require('fs')

// Create SVG render instance.
var svg = new Rsvg()

var name,
    height,
    width,
    output

commander
  .version('0.1.0')
  .option('-o, --output', 'Output filepath')
  .option('--width', 'Width in pixel')
  .option('--height', 'Height in pixel')
  .option('-n, --name [name]', 'Name of logo')
  .parse(process.argv)

if (commander.name) {
  name = commander.name
} else {
  console.log('MUST specify a name, ex. OONI-HorizontalColor')
  process.exit(1)
}

if (commander.output) {
  output = commander.output
} else {
  output = name + '.png'
}

if (commander.height) height = parseInt(commander.height)
if (commander.width) width = parseInt(commander.width)

// When finishing reading SVG, render and save as PNG image.
svg.on('finish', () => {
  if (!height && !width) {
    height = svg.height
    width = svg.width
  } else if (width && !height) {
    height = svg.height/svg.width * width
  } else if (height && !width) {
    width = svg.width/svg.height * height
  }
  fs.writeFile(output, svg.render({
    format: 'png',
    width: width,
    height: height
  }).data, () => {
    console.log('Wrote: '+output)
  })
})

fs.createReadStream('../components/svgs/logos/'+name+'.svg').pipe(svg)

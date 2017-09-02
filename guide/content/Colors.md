# Colors

## Brand colors

```.jsx
<div>
  <Flex wrap>
  <Box w={1/2}>
  <ColorPalette
    color={colors.OONI_BLUE}
    name="OONI Blue"
  />
  </Box>
  <Box w={1/2}>
  <ColorPalette
    color={colors.LIGHT_BLUE}
    name="Light Blue"
  />
  </Box>
  </Flex>
</div>
```

## Palette

Our color palette is programatically generated starting from our primary brand color (OONI Blue).

The rules followed to generate the palette are actually quite simple. We start
from the hue of the OONI blue color and proceed in `1/12` increments of the
whole hue spectrum (ex. 210, 240, 270, etc.).

For each of these increments we determine the base color in this hue by creating a color that is `HSL($TARGET_HUE, $OONI_BLUE_SATURATION, $OONI_BLUE_LUMINANCE)`. We then proceed to creating shades up and down by variating the saturation and luminance of the color in this space.

This leads to a full color palette that is coordinated (it's derived from our brand color), but also extremely function.

One thing to be aware of in this approach is that since the colors in every hue
are derived by merely changing the based hue, they have no variation in
brightness. As a result when you are combining colors from different hues (for example for a data visualisation) be sure to pick ones that have some brightness variation (luminance).

As a concrete example if I wanted to do create a categorical data visualisation
I would want to pick `indigo5`, `yellow6`, `cyan7` (they have different number
so different brightnesses too!) and should **not** pick `indigo5`, `yellow5`
and `cyan5` (which all have the same brightness value and can appear very
similar to the color blind).

The color is scheme is generated thanks to [palx](https://palx.jxnblk.com/).

### Gray

```.jsx
<div>
  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'gray'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={colors.palx[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>
</div>
```

### Blue

```.jsx
<div>
  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'blue'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={colors.palx[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>
</div>
```


### Indigo

```.jsx
<div>
  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'indigo'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={colors.palx[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>
</div>
```



### Violet

```.jsx
<div>
  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'violet'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={colors.palx[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>
</div>
```

### Fuschia

```.jsx
<div>
  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'fuschia'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={colors.palx[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>
</div>
```

### Pink

```.jsx
<div>
  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'pink'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={colors.palx[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>
</div>
```

### Red

```.jsx
<div>
  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'red'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={colors.palx[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>
</div>
```

### Orange

```.jsx
<div>
  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'orange'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={colors.palx[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>
</div>
```

### Yellow

```.jsx
<div>
  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'yellow'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={colors.palx[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>
</div>
```

### Lime

```.jsx
<div>
  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'lime'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={colors.palx[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>
</div>
```

### Green

```.jsx
<div>
  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'green'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={colors.palx[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>
</div>
```

### Teal

```.jsx
<div>
  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'teal'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={colors.palx[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>
</div>
```

### Cyan

```.jsx
<div>
  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'cyan'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={colors.palx[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>
</div>
```

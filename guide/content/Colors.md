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

Our color palette is adapted from [Open Color](https://yeun.github.io/open-color/), an open-source color scheme. All hues apart from `blue` are taken as-is from Open Color. The blue shades are adapted to include OONI's primary (`#0588CB`) and secondary (`#5DB8FE`) color.

Keep in mind when you are combining colors from different hues (for example for a data visualisation) be sure to pick ones that have some brightness variation (luminance).

As a concrete example if you wanted to create a categorical data visualisation,
you would want to pick `indigo5`, `yellow6`, `cyan7` (they have different number
so different brightnesses too!) and should **not** pick `indigo5`, `yellow5`
and `cyan5` (which all have the same brightness value and can appear very
similar to color blind people). Keep it accessible.


### Gray

```.jsx
<div>
  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'gray'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={colors.palette[`${colorName}${n}`]}
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
        color={colors.palette[`${colorName}${n}`]}
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
        color={colors.palette[`${colorName}${n}`]}
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
        color={colors.palette[`${colorName}${n}`]}
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
        color={colors.palette[`${colorName}${n}`]}
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
        color={colors.palette[`${colorName}${n}`]}
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
        color={colors.palette[`${colorName}${n}`]}
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
        color={colors.palette[`${colorName}${n}`]}
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
        color={colors.palette[`${colorName}${n}`]}
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
        color={colors.palette[`${colorName}${n}`]}
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
        color={colors.palette[`${colorName}${n}`]}
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
        color={colors.palette[`${colorName}${n}`]}
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
        color={colors.palette[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>
</div>
```

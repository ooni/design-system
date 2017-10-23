## Primary button

```.jsx
<Button>
Primary button
</Button>
```

## Hollow button

```.jsx
<Button hollow>
Hollow
</Button>
```

With custom border in px:

```.jsx
<Button hollow border={3} fontSize={4}>
Hollow
</Button>
```

## Inverted button

```.jsx
<Box bg='black' p={2}>
<Button inverted>
Inverted
</Button>

<Button inverted hollow>
Hollow Inverted
</Button>
</Box>
```

## Share buttons

```.jsx
<Flex>

<Box mr={2}>
<TwitterShareButton
  message='OONI Rocks!'
  via='OpenObservatory'
  url='https://ooni.torproject.org'
  hashtags='censorship,ooni'
/>
</Box>

<Box>
<FacebookShareButton
  url='https://ooni.torproject.org'
/>
</Box>

</Flex>
```

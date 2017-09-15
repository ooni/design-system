## Primary button

```.jsx
<Button>
Primary button
</Button>
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

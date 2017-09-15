## Basic

```.jsx
<RadioGroup name='animal' value='whale'>
  <RadioButton label='Whale' value='whale' />
  <RadioButton label='Octopus' value='octopus' />
  <RadioButton label='Seal' value='seal' />
</RadioGroup>
```

## With state

In order to get the radio to do something useful we need to use some state.


```.jsx

class RadioExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'whale'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({value})
  }

  render() {
    return (
      <RadioGroup name='animal' value={this.state.value} onChange={this.handleChange}>
        <RadioButton label='Whale' value='whale' />
        <RadioButton label='Octopus' value='octopus' />
        <RadioButton label='Seal' value='seal' />
      </RadioGroup>
    )
  }
}
```

storiesOf('Components/Atoms/Select', module)
  .add('default', () =>
    <div>
      <label>
        <div> Choose An Option </div>
        <Select>
          <option value="1">One</option>
          <option value="2">Two</option>
        </Select>
      </label>
    </div>
  )
  .add('Really long options', () => (
    <Select>
      <option value="1">Really Really Really Really Really Really Long</option>
      <option value="2">Two</option>
    </Select>
  ))
  .add('onChange', () => (
    <Select
      onChange={(e) => alert(e.target.value)}
    >
      <option value="1">One</option>
      <option value="2">Two</option>
    </Select>
  ))

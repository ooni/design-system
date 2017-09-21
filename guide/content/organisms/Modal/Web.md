## Modal

```.jsx
class ModalExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
			open: false
		}
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div>
        <Modal onHideClick={this.toggleModal} show={this.state.open} width={1/2} height={1/2} closeButton='right'>
          <Heading h={1} center>Hello modal</Heading>
          <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Text>
          <Flex pt={4} justify='center' align='center'>
            <Button onClick={this.toggleModal}>Done</Button>
          </Flex>
        </Modal>
        <Button onClick={this.toggleModal}>Open modal</Button>
      </div>
    )
  }
}
```

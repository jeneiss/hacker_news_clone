import React from 'react'
import Nav from './Nav'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      storyType: 'top',
      storyList: []
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(type) {
    this.setState({ storyType: type})
  }


  render() {
    return (
      <div id='wrapper'>
        <Nav
          type={this.state.storyType}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

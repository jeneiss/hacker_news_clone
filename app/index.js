import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './components/Nav'

class App extends React.Component {
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
    console.log(this.state.storyType)
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

ReactDOM.render(<App />, document.getElementById('root'))

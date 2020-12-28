import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './components/Nav'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stories: 'top'
    }
  }

  render() {
    return (
      <div id='wrapper'>
        <Nav />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

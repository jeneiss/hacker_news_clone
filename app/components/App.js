import React from 'react'
import Nav from './Nav'

import Stories from './Stories'
import { getStories } from '../utils/api'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      storyType: 'top',
      storyList: []
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    getStories(this.state.storyType).then((items) => {
      this.setState({
        storyList: {
          [this.state.storyType]: items
        }
      })
    })
  }

  handleClick(type) {
    this.setState({ storyType: type})

    if (!this.state.storyList[type]) {
      getStories(this.state.storyType).then((items) => {
        this.setState({
          storyList: {
            [this.state.storyType]: items
          }
        })
      })
    }
  }

  render() {
    return (
      <div id='wrapper'>
        <Nav
          type={this.state.storyType}
          handleClick={this.handleClick}
        />
        <Stories
          type={this.state.storyType}
          stories={this.state.storyList}
        />
      </div>
    )
  }
}

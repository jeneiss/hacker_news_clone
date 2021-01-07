import React from 'react'
import Nav from './Nav'
import Stories from './Stories'
import Loading from './Loading'

import { getStories } from '../utils/api'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      type: 'top',
      list: null,
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleFetch = this.handleFetch.bind(this)
  }

  componentDidMount() {
    this.handleFetch()
  }

  componentDidUpdate() {
    if (!this.state.list) this.handleFetch()
  }

  handleClick(e) {
    const type = e.target.name

    this.setState({
      type,
      list: null
    })
  }

  handleFetch() {
    getStories(this.state.type)
      .then((list) => {
        this.setState({ list })
      })
      .catch((err) => console.log(err))
  }

  render() {
    const { type, list } = this.state

    return (
      <div id='wrapper'>
        <Nav
          type={type}
          handleClick={this.handleClick}
        />
        {list ?
          <Stories
            type={type}
            stories={list}
          /> :
          <Loading />
        }
      </div>
    )
  }
}

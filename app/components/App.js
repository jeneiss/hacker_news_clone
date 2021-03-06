import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import Stories from './Stories'
import Loading from './Loading'
import User from './User'
import Comments from './Comments'
import { ThemeConsumer } from './ThemeContext'

import { getStories } from '../utils/api'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      type: 'top',
      list: null,
      isLoading: true
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
      list: null,
      isLoading: true
    })
  }

  handleFetch() {
    getStories(this.state.type)
      .then((list) => {
        this.setState({
          list,
          isLoading: false
        })
      })
      .catch((err) => console.log(err))
  }

  render() {
    const { type, list, isLoading } = this.state

    return (
      <ThemeConsumer>
        {context => (
          <div id='wrapper' className={`${context.theme}-theme`}>
            <div className='content__container'>
              <Router>
                <Nav
                  type={type}
                  handleClick={this.handleClick}
                  handleThemeClick={context.toggleTheme}
                  themeType={context.theme}
                />
                <Switch>

                  <Route
                    path='/user'
                    component={User}
                  />

                  <Route
                    path='/post'
                    component={Comments}
                  />

                  {isLoading ?
                    <Loading /> :
                    <Route
                      path='/'
                      render={(props) => (
                        <Stories
                          {...props}
                          type={type}
                          stories={list}
                        />
                      )}
                    />
                  }
                </Switch>
              </Router>
            </div>
          </div>
          )}
      </ThemeConsumer>
    )
  }
}

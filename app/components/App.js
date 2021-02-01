import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import Stories from './Stories'
import Loading from './Loading'
import User from './User'
import Comments from './Comments'
import { ThemeConsumer } from './ThemeContext'

import { getStories } from '../utils/api'

function App() {
  const [ type, setType ] = useState('top')
  const [ list, setList ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)

  const handleClick = (e) => {
    setType(e.target.name)
    setList(null)
    setIsLoading(true)
  }

  const handleFetch = () => {
    getStories(type)
      .then((list) => {
        setList(list)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    handleFetch()
  }, [isLoading])

  return (
    <ThemeConsumer>
      {context => (
        <div id='wrapper' className={`${context.theme}-theme`}>
          <div className='content__container'>
            <Router>
              <Nav
                type={type}
                handleClick={handleClick}
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

export default App

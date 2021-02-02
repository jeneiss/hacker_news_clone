import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import Stories from './Stories'
import Loading from './Loading'
import User from './User'
import Comments from './Comments'
import { ThemeContext } from './ThemeContext'

import { getStories } from '../utils/api'

function App() {
  const [ type, setType ] = useState('top')
  const [ list, setList ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)

  const { theme, toggleTheme } = useContext(ThemeContext)

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
    <div id='wrapper' className={`${theme}-theme`}>
      <div className='content__container'>
        <Router>
          <Nav
            type={type}
            handleClick={handleClick}
            handleThemeClick={toggleTheme}
            themeType={theme}
          />
          <Switch>

            <Route
              path='/user/:id'
              component={User}
            />

            <Route
              path='/post/:id'
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
  )
}

export default App

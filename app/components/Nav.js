import React from 'react'

import { NavLink } from 'react-router-dom'

function Nav({ handleClick, handleThemeClick, themeType}) {
  return (
    <nav className='nav'>
      <div className='nav__stories'>
        <NavLink
          to='/'
          className='nav__stories-btn nav__link'
          activeClassName='active' exact
          name='top'
          onClick={(e) => handleClick(e)}
        >
          Top
        </NavLink>
        <NavLink
          to='/new'
          className='nav__stories-btn nav__link'
          activeClassName='active' exact
          name='new'
          onClick={(e) => handleClick(e)}
        >
          New
        </NavLink>
      </div>

      <div className='nav__theme'>
        <button
          className='nav__theme-btn btn'
          onClick={handleThemeClick}
        >
          {themeType === 'light' ? '🔦' : '💡' }
        </button>
      </div>
    </nav>
  )
}

export default Nav

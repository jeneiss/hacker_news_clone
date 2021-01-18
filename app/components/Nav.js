import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(props) {
  return (
    <nav className='nav'>
      <div className='nav__stories'>
        <NavLink
          to='/'
          className='nav__stories-btn btn'
          name='top'
          onClick={(e) => props.handleClick(e)}
        >
          Top
        </NavLink>
        <NavLink
          to='/new'
          className='nav__stories-btn btn'
          name='new'
          onClick={(e) => props.handleClick(e)}
        >
          New
        </NavLink>
      </div>

      <div className='nav__theme'>
        <button className='nav__theme-btn btn'>🔦</button>
      </div>
    </nav>
  )
}

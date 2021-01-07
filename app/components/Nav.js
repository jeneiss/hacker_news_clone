import React from 'react'

export default function Nav(props) {
  return (
    <nav className='nav'>
      <div className='nav__stories'>
        <button
          className='nav__stories-btn btn'
          name='top'
          onClick={(e) => props.handleClick(e)}
        >
          Top
        </button>
        <button
          className='nav__stories-btn btn'
          name='new'
          onClick={(e) => props.handleClick(e)}
        >
          New
        </button>
      </div>

      <div className='nav__theme'>
        <button className='nav__theme-btn btn'>🔦</button>
      </div>
    </nav>
  )
}

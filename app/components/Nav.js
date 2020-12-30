import React from 'react'

export default function Nav(props) {
  return (
    <nav className='nav'>
      <div className='nav__stories'>
        <button
          className='nav__stories-btn btn'
          onClick={() => props.handleClick('top')}
        >
          Top
        </button>
        <button
          className='nav__stories-btn btn'
          onClick={() => props.handleClick('new')}
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

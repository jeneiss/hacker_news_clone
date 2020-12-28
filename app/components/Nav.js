import React from 'react'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className='nav'>
        <div className='nav__stories'>
          <button className='nav__stories-btn btn'>Top</button>
          <button className='nav__stories-btn btn'>New</button>
        </div>

        <div className='nav__theme'>
          <button className='nav__theme-btn btn'>🔦</button>
        </div>
      </nav>
    )
  }
}

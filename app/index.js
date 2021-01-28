import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import { ThemeProvider } from './components/ThemeContext'
import './index.css'

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
document.getElementById('root'))

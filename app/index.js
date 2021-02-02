import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import { ThemeContextProvider } from './components/ThemeContext'
import './index.css'

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
document.getElementById('root'))

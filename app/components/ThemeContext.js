import React, { useState } from 'react'

const { Provider, Consumer } = React.createContext()

function ThemeProvider({ children }) {
  const [ theme, setTheme ] = useState('light')

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <Provider value={{theme: theme, toggleTheme: toggleTheme}}>
      {children}
    </Provider>
  )
}

export { ThemeProvider, Consumer as ThemeConsumer }

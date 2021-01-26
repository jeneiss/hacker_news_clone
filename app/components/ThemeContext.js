import React from 'React'

const { Provider, Consumer } = React.createContext()

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light'
    }

    this.toggleTheme = this.toggleTheme.bind(this)
  }

  toggleTheme() {
    this.setState((prevState) => (
      {theme: prevState.theme === 'light' ? 'dark' : 'light'}
    ))
  }

  render() {
    return (
      <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </Provider>
    )
  }
}

export { ThemeProvider, Consumer as ThemeConsumer }

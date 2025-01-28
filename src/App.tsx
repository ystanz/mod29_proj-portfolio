import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import GlobalStyle, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Projects from './containers/Projects'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false)

  function changeTheme() {
    setUseDarkTheme(!useDarkTheme)
  }

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App

import React, { Component } from 'react'
import { Normalize } from 'styled-normalize'

import { ThemeProvider, theme } from '@ui/theme'
import { GlobalStyles } from '@ui/theme'
import { Registration } from '@ui/pages'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Normalize />
          <GlobalStyles />
          <Registration />
        </>
      </ThemeProvider>
    )
  }
}

export default App

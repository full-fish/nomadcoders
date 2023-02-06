import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import A from './2-STYLED-COMPONENTS/2.0-2.3'
import B from './2-STYLED-COMPONENTS/2.4-2.6'
import C from './2-STYLED-COMPONENTS/2.7'

const darkTheme = {
  textColor: 'whitesmoke',
  backgroundColor: '#111',
}

const lightTheme = {
  textColor: '#111',
  backgroundColor: '#whitesmoke',
}
// ./#2 STYLED COMPONENTS/App
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <A />
    <B />
    <ThemeProvider theme={darkTheme}>
      <C />
    </ThemeProvider>
  </React.StrictMode>
)

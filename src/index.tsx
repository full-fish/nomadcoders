import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
// import A from './2-STYLED-COMPONENTS/2.0-2.3'
// import B from './2-STYLED-COMPONENTS/2.4-2.6'
// import C from './2-STYLED-COMPONENTS/2.7'
import D from './3-TYPESCRIPT/3.2'
import E from './3-TYPESCRIPT/3.6'
import { darkTheme, lightTheme } from './theme'
import App from './5-CRYPTO_TRACKER/App'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
// const darkTheme = {
//   textColor: 'whitesmoke',
//   backgroundColor: '#111',
// }

// const lightTheme = {
//   textColor: '#111',
//   backgroundColor: '#whitesmoke',
// }
// ./#2 STYLED COMPONENTS/App
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <div>
    {/* <A />
    <B />
    <ThemeProvider theme={darkTheme}>
      <C />
    </ThemeProvider> */}
    {/* <D /> */}
    <QueryClientProvider client={queryClient}>
      {/* <E /> */}
      <App />
    </QueryClientProvider>
    {/* </React.StrictMode> */}
  </div>
)

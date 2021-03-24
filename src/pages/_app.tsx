import { GlobalStyles, css } from 'twin.macro'
import { Global } from '@emotion/react'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <Global styles={globalStyles} />
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
)
const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`
export default App

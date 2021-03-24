import { GlobalStyles } from 'twin.macro'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
)

export default App

import type { AppProps } from 'next/app'

import '../src/css/index.scss'
import '../src/css/pure.scss'

export default function App({
  Component,
  pageProps: { ...pageProps }
}: AppProps) {

  return (
    <Component {...pageProps} />
  )
}

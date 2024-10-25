import type { AppProps } from 'next/app'
import '../src/style/css/index.scss'

export default function App({
  Component,
  pageProps: { ...pageProps }
}: AppProps) {

  return (
    <Component {...pageProps} />
  )
}

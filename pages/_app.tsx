import React from 'react'
import { type AppProps } from 'next/app'
import '../src/css/index.css'
import '../src/css/style.css'

export default function App ({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  
  const AnyComponent = Component as any
  
  return <AnyComponent {...pageProps} />
}

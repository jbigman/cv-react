import Head from 'next/head'
import Curiculum from './../src/curiculum/curiculum'
import { Html } from 'next/document.js'

const Index = () => {
  return (
    <Html lang="en">
      <Head>
        <title>Jérémie GAMBIN</title>
      </Head>
      <Curiculum />
    </Html>
  )
}

export default Index

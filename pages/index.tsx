import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/property/Navbar'

import Footer from '../components/property/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CodeMaxima Coding Translater</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      
      <Footer />
    </div>
  )
}

export default Home

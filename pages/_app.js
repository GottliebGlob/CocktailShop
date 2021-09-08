import React from 'react'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <title> Cocktail shop </title>
  </Head>
    <Component {...pageProps} />
  </>
)
}

import '../styles/globals.css'

export default MyApp

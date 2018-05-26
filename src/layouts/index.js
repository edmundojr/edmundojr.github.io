import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

import '../styles/main.scss'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Helmet>
          <html lang="en" />
          <meta name="theme-color" content="#A6B2BB" />
          <meta name="description" content="Edmundo Santos is a multidisciplinary designer, coder, photo enthusiast, book lover, and occasional wanderer living in Ireland." />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
          <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/png" href="/favicon-192x192.png" sizes="192x192" />
        </Helmet> 
      	<Header />
        <Hero />
        {children()}
      </div>
    )
  }
}

export default Template

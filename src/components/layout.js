import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { Header, Footer } from '../components'
import '../styles/main.css'

export class Layout extends React.Component {
  render() {
    const { children } = this.props
    const siteDescription = get(this, 'props.data.site.siteMetadata.title')

    return (
      <>
        <Helmet>
          <html lang="en" />
          <meta name="theme-color" content="#A6B2BB" />
          <meta name="description" content={siteDescription} />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
          <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/png" href="/favicon-192x192.png" sizes="192x192" />
        </Helmet>
        <Header />
        {children}
        <Footer />
      </>
    )
  }
}

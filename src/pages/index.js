import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import { Layout, Hero } from '../components'

export default class Index extends React.Component {
  render() {
    const pageTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <Layout>
        <Helmet title={pageTitle + ' × Articles'} />
        <Hero
          title={'Edmundo Santos'}
          description={'User Interface Designer'}
        />
        <main />
      </Layout>
    )
  }
}

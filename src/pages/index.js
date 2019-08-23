import React from 'react'
import Helmet from 'react-helmet'
import { Layout, Hero } from '../components'
// import config from '../config'

export default () => (
  <Layout>
    {/*<Helmet title={config.title + ' × Articles'} />*/}
    <Hero title={'Edmundo Santos'} description={'User Interface Designer'} />
    <main />
  </Layout>
)

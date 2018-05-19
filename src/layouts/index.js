import React from 'react'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

import '../styles/main.scss'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
      	<Header />
        <Hero />
        {children()}
      </div>
    )
  }
}

export default Template

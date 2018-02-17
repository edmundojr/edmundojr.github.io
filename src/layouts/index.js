import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/main.scss'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="grid-container">
      	<Header/>
        {children()}
        <Footer/>
      </div>
    )
  }
}

export default Template

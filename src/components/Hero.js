import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h1 className="hero__title">
          The daily, weekly, and monthly musings of Edmundo Santos.
        </h1>
        <p className="hero__description">
          UI/UX Designer living in Cork, Ireland.
        </p>
      </div>
    )
  }
}
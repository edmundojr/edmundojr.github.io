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
          For news updates, please <a href="https://twitter.com/edmundojr_">follow me on Twitter</a> or <Link to="/feed.xml">subscribe to the feed</Link>.
        </p>
      </div>
    )
  }
}
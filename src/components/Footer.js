import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer" role="contentinfo">
        <p>
          You can find me on <a href="https://twitter.com/edmundojr_">Twitter</a>, <a href="https://instagram.com/manfromanotherland">Instagram</a>, <a href="https://dribbble.com/edmundojr">Dribbble</a>, and <a href="https://github.com/edmundojr">Github</a>.
        </p>
      </footer>
    )
  }
}
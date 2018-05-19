import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Footer extends Component {
  render() {
    return (
      <footer
        className="footer d-flex flex-column-reverse flex-md-row justify-content-between align-items-center py-4 mt-8 small" role="contentinfo">
        <span>
          &copy; Edmundo Santos
        </span>
        <nav className="mb-2 mb-md-0">
          <a
            className="text-white"
            href="https://dribbble.com/edmundojr">
            Dribbble
          </a>
          <a
            className="text-white ml-2 ml-md-3"
            href="https://gitHub.com/edmundojr">
            GitHub
          </a>
          <a
            className="text-white ml-2 ml-md-3"
            href="https://instagram.com/manfromanotherland">
            Instagram
          </a>
          <a
            className="text-white ml-2 ml-md-3"
            href="https://twitter.com/edmundojr_">
            Twitter
          </a>
        </nav>
      </footer>
    )
  }
}
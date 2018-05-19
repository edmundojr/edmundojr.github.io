import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Footer extends Component {
  render() {
    return (
      <footer
        className="footer d-flex flex-column-reverse flex-sm-row justify-content-between py-4 mt-8 small" role="contentinfo">
        <span>
          &copy; {(new Date().getFullYear())} Edmundo Santos
        </span>
        <nav className="mb-1 mb-sm-0">
          <a
            className="d-inline-block pr-1 pl-0 pl-sm-1"
            href="https://dribbble.com/edmundojr">
            Dribbble
          </a>
          ·
          <a
            className="d-inline-block px-1"
            href="https://gitHub.com/edmundojr">
            GitHub
          </a>
          ·
          <a
            className="d-inline-block px-1"
            href="https://instagram.com/manfromanotherland">
            Instagram
          </a>
          ·
          <a
            className="d-inline-block pl-1 pr-1 pr-sm-0"
            href="https://twitter.com/edmundojr_">
            Twitter
          </a>
        </nav>
      </footer>
    )
  }
}
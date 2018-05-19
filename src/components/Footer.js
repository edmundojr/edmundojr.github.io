import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-8 font-size-sm" role="contentinfo">
        <div className="container-fluid d-flex flex-column-reverse flex-md-row justify-content-between py-4">
          <span>
            &copy; {(new Date().getFullYear())} Edmundo Santos
          </span>
          <nav className="mb-1 mb-md-0">
            <a
              className="d-inline-block pr-1 pl-0 pl-md-1"
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
              className="d-inline-block pl-1 pr-1 pr-md-0"
              href="https://twitter.com/edmundojr_">
              Twitter
            </a>
          </nav>
        </div>
      </footer>
    )
  }
}
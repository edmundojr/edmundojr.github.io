import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Header extends Component {
  render() {
    return (
      <header className="header" role="banner">
        <h1 className="h0">Edmundo Santos</h1>
        <p>UI/UX designer, photo enthusiast, book lover, occasional hiker<br/> <small>Cork, Ireland</small></p>
        <nav className="nav">
          <Link to="/" className={"nav__link " + ((location.pathname == '/') ? 'is-active' : '')}>
            Home →
          </Link>
          <Link to="/blog/" className={"nav__link " + (location.pathname.startsWith('/blog') ? 'is-active' : '')}>
            Blog →
          </Link>
        </nav>
        <span className="separator" aria-hidden="true"></span>
      </header>
    )
  }
}
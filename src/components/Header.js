import React, { Component } from 'react'
import Link from 'gatsby-link'

// export ({ pathname }) => {
//   const isHome = pathname == '/' ? 'is-active' : ''
//   const isBlog = pathname == '/blog/' ? 'is-active' : ''
// }

export default class Header extends Component {
  render() {
    var isHome = ''
    var isBlog = ''
    if (typeof window !== 'undefined') {
      isHome = window.location.pathname == '/' ? 'is-active' : ''
      isBlog = window.location.pathname.startsWith('/blog/') ? 'is-active' : ''
    }
    return (
      <header className="header" role="banner">
        <h1 className="h0">Edmundo Santos</h1>
        <p>UI/UX designer, photo enthusiast, book lover, occasional hiker<br/> <small>Cork, Ireland</small></p>
        <nav className="nav">
          <Link to="/" className={"nav__link " + isHome}>
            Home →
          </Link>
          <Link to="/blog/" className={"nav__link " + isBlog}>
            Blog →
          </Link>
        </nav>
        <span className="separator" aria-hidden="true"></span>
      </header>
    )
  }
}
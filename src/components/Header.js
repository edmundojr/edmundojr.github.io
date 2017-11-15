import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Header extends Component {
  render() {
    return (
      <Link to={'/'}>
        <svg
          width="44"
          height="25"
          viewBox="0 0 44 25"
          xmlns="http://www.w3.org/2000/svg">
        	<title>Edmundo Santos</title>
        	<path
        	  d="M7 10h11v5H7v3h11v7H0V0h18v7H7v3zM21 0h10.597c3.43 0 6.289 1.155 8.74 3.637C42.767 6.1 44 9.08 44 12.491c0 3.436-1.233 6.428-3.663 8.89-2.442 2.473-5.3 3.619-8.74 3.619H21V0zm8.282 17.987c.324.007.649.013.972.013 1.627 0 3.494-.126 5.061-1.625 1.103-1.054 1.686-2.389 1.685-3.862 0-1.391-.535-2.674-1.587-3.806C34.404 7.574 32.998 7 31.236 7H28v10.987h1.282z"
        	  fill="#F0F5F9"
        	  fill-rule="evenodd"/>
        </svg>
      </Link>
    )
  }
}
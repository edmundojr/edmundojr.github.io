import React from 'react'
import Link from 'gatsby-link'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    header = (
      <h1>
        <Link to={'/'}>
          Edmundo Santos
        </Link>
      </h1>
    )

    return (
      <div>
        {header}
        {children()}
      </div>
    )
  }
}

export default Template

import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class HomeIndex extends React.Component {
  render() {
    const siteTitle   = get(this, 'props.data.site.siteMetadata.title')

    return (
      <main className="main main--home">
        <Helmet title={siteTitle + ' × UI/UX Designer'} />
        <article>
          <h4>Hello, welcome to my homepage!</h4>
          <p>
            This website is <del>a work in progress</del> an experiment, so don't take it too seriously. I'm aiming to build a personal hub where I can try my hand at writing some <Link to="/blog/">articles</Link>, share my photos, books I'm reading, maybe some sort of travel log… all that <span title="Irish for fun"><em lang="ie">craic</em></span> – a creative outlet I guess, some way to stretch parts of my brain that don't get enough exercise.
          </p>
        </article>
      </main>
    )
  }
}

export default HomeIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

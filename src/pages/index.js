import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div className="container">
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <article key={node.fields.slug} className="post row">
              <header className="col-sm-9 col-md-8 offset-md-1">
                <h2 className="post-title">
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </h2>
              </header>
              <div className="post__body col-sm-9 col-md-8 offset-md-1">
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
              <div className="post__meta col-sm-3">
                <time>{node.frontmatter.date}</time>
              </div>
            </article>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMM YYYY")
            title
          }
        }
      }
    }
  }
`

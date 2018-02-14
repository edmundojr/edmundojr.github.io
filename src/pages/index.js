import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <main className="main">
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          const postDate = node.frontmatter.date.replace(/\S+/g, function(a) {
            return `<span>${a}</span>`
          })
          return (
            <article key={node.fields.slug}
                     className="post">
              <header className="post__header">
                <h2 className="post__title">
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </h2>
              </header>
              <div className="post__content">
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
              <div className="post__meta">
                <time className="post__date"
                      dangerouslySetInnerHTML={{ __html: postDate }} />
              </div>
            </article>
          )
        })}
      </main>
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
            tags
          }
        }
      }
    }
  }
`

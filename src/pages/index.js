import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

export default class HomeIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <main className="container-fluid">
        <Helmet title={siteTitle + ' × Articles'} />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          const postDate = node.frontmatter.date.replace(/\S+/g, function(a) {
            return `<span>${a}</span>`
          })
          return (
            <article key={node.fields.slug} className="post mb-5">
              <header className="row align-items-center">
                <div className="order-first d-none d-md-block col-md-1 col-lg-1 offset-lg-1">
                  <div className="bg-white" style={{ paddingTop: '4px' }}></div>
                </div>
                <h1 className="order-last col-sm-8 col-md-7">
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </h1>
              </header>
              <div className="row">
                <div
                  className="order-last order-sm-3 col-sm-8 col-md-7 offset-md-1 offset-lg-2"
                  dangerouslySetInnerHTML={{ __html: node.html }}>
                </div>
                <aside className="post__meta order-3 order-sm-last col-sm-4 col-md-3 text-sm-center text-uppercase">
                  <time className="post__date d-inline-block mb-1 mb-sm-0" dangerouslySetInnerHTML={{ __html: postDate }} />
                </aside>
              </div>
            </article>
          )
        })}
      </main>
    )
  }
}

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          html
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

import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

export default class HomeIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <main className="container-fluid">
        <Helmet title={siteTitle + ' × Articles'} />
        {posts.map(({ node }) => {
          const postTitle = node.frontmatter.title
          const postLink = node.fields.slug
          const postDate = node.frontmatter.date.replace(/(\S+)/g, '<span>$1</span>')
          const postTags = node.frontmatter.tags
          return (
            <article key={postLink} className="post">
              <h1 className="post__title">
                <Link to={postLink} className="post__title__link row align-items-center">
                  <span className="post__title__detail col-1 offset-lg-1 order-last order-sm-first"></span>
                  <span className="col-11 col-md-7 order-first order-sm-last">
                    {postTitle}
                  </span>
                </Link>
              </h1>
              <div className="row align-items-start">
                <div
                  className="col-sm-11 col-md-7 offset-sm-1 offset-lg-2 order-last order-md-first"
                  dangerouslySetInnerHTML={{ __html: node.html }} />
                <aside className="post__meta col-sm-11 col-md-3 text-md-center offset-sm-1 offset-md-0 order-first order-md-last position-sticky mb-2">
                  <time
                    className="post__date d-inline-block"
                    dangerouslySetInnerHTML={{ __html: postDate }} />
                  <ul className="post__tags">
                    {postTags.map((tag, index) => (
                      <li key={index}>
                        {tag}
                      </li>
                    ))}
                  </ul>
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
